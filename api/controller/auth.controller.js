const authRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {tb_user} = require("../../sequelize/models");
const {getResponse} = require("./utils");

authRouter.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    tb_user.findOne({where: {username: username}})
        .then(user => {
            if (!user) {
                return res.status(404).send(getResponse(false, "User not found", {}));
            }

            bcrypt.compare(password, user.password, (error, matches) => {
                if (!matches) {
                    return res.status(401).send(getResponse(false, "Invalid Password", {error: error}));
                }

                const token = jwt.sign(
                    {
                        sub: user.id,
                        name: user.username,
                    },
                    process.env.TOKEN_SECRET,
                    {
                        /*expiresIn: "1hr"*/
                    },
                );

                return res.status(200).send(
                    getResponse(true, "You are a valid user ;)", {token: token})
                );
            });
        }).catch(reason => res.status(500).send(getResponse(false, "There was an error", {error: reason})))
});

const verifyToken = (req, res, next) => {
    const auth = req.header('Authorization');

    if (!auth) {
        return res.status(403).send(
            getResponse(false, "You are not authorized to access this content", {})
        );
    }

    const token = auth.split(" ")[1];

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(verified);
        next();
    } catch (error) {
        res.status(401).send(getResponse(false, "Invalid token", {error: error}));
    }
}

module.exports = {
    verifyToken,
    authRouter
};
