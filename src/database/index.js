const Sequelize = require('sequelize')
const dbConfir = require('../config/database')
const { User, Address, Friend } = require('sequelize-poc');
const connection = new Sequelize(dbConfir)

User.init(connection)
Address.init(connection)
Friend.init(connection)
Address.associate(connection.models)
User.associate(connection.models)
Friend.associate(connection.models)

module.exports = connection
