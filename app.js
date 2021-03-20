require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const {getResponse} = require("./api/controller/utils");
const {authRouter, verifyToken} = require('./api/controller/auth.controller');
const {router, secureRouter} = require('./api/controller/meal.controller');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/meals', router);
app.use('/meals/admin', verifyToken, secureRouter);

app.use((req, res) => res.status(404).send(getResponse(false, 'URL Not Found!', {})));

app.get('/', (req, res) => res.status(200).send(getResponse(false, 'Api Home Page', {})));

app.listen(port, () => {
    console.log("Server running on port: " + port);
});
