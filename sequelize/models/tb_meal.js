'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class tb_meal extends Model {
        static associate(models) {

        }
    }

    tb_meal.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        picture: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'tb_meal',
    });
    return tb_meal;
};
