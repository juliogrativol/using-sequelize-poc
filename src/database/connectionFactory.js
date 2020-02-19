const {User, Address, Friend} = require('sequelize-poc');

module.exports = {

    async getConnection(dbConfig) {
        const Sequelize = require('sequelize')
        const connection = new Sequelize(dbConfig)

        let UserModel = User.toJSON

        console.log(UserModel)

        User.init(connection)        
        Friend.init(connection)
        Address.init(connection)
        
        Address.associate(connection.models)
        User.associate(connection.models)
        Friend.associate(connection.models)

        return { connection, User, Address, Friend }
    }
}
