const Sequelize = require('sequelize')
const db = require('../db')


const Item = db.define('item', {
    name: {
        type: Sequelize.STRING,
        allownull: false,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = Item