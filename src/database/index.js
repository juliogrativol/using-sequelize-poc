const { User, Address, Friend } = require('sequelize-poc');

module.exports = function (app) {

    const Sequelize = require('sequelize')
    const connection = new Sequelize(app.src.config.database)

    User.init(connection)
    Address.init(connection)
    Friend.init(connection)
    Address.associate(connection.models)
    User.associate(connection.models)
    Friend.associate(connection.models)

}
