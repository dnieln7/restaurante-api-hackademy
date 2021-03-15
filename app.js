require('dotenv').config();

const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser');
const mealController = require('./api/controller/meal.controller')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send({error: true, message: 'Api Home Page'}));

app.route('/meals')
    .get((req, res) => mealController.get(req, res))
    .post((req, res) => mealController.post(req, res));

app.use((req, res) => res.status(404).send({error: true, message: 'URL Not Found!'}));

app.listen(port, () => {
    console.log("Server running on port: " + port);
});
