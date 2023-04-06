const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const electronics = sequelize.define('electronics', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true

    },
    price: {
        type: Sequelize.INTEGER,
        allowNull:false
        
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 

    type: {
        type: Sequelize.STRING,
        allowNull: false,
    }


})

const food = sequelize.define('food', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true

    },
    price: {
        type: Sequelize.INTEGER,
        allowNull:false
        
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 

    type: {
        type: Sequelize.STRING,
        allowNull: false,
    }


})

const skincare = sequelize.define('skincare', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true

    },
    price: {
        type: Sequelize.INTEGER,
        allowNull:false
        
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 

    type: {
        type: Sequelize.STRING,
        allowNull: false,
    }


})

exports.electronics = electronics;
exports.food = food;
exports.skincare = skincare;
