const {tb_meal} = require("../../sequelize/models");
const {getResponse} = require("./utils");

function get(req, res) {
    tb_meal.findAll()
        .then(meals => res.status(200).send(getResponse(true, "", meals)))
        .catch(reason => {
            res.status(500).send(getResponse(false, "There was an error", reason));
        });
}

function post(req, res) {
    const meal = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        picture: req.body.picture,
    };

    tb_meal.create(meal)
        .then(createdMeal => res.status(201).send(getResponse(true, "Meal created", createdMeal)))
        .catch(reason => {
            res.status(500).send(getResponse(false, "There was an error", reason));
        });
}

module.exports = {
    get,
    post
}
