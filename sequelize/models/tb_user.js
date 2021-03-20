'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class tb_user extends Model {
        static associate(models) {

        }
    }

    tb_user.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'tb_user',
    });
    return tb_user;
};
