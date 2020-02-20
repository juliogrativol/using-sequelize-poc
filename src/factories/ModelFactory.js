const { User, Address, Friend } = require('sequelize-poc');

module.exports = (app) => {

    const { connection } = app.src.database.ConnectionFactory

    User.init(connection)
    Friend.init(connection)
    Address.init(connection)

    Address.associate(connection.models)
    User.associate(connection.models)
    Friend.associate(connection.models)

    return { User, Address, Friend }

}
