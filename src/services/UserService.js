const { Sequelize } = require('sequelize')

module.exports = {
    async store(param) {

        const { User, UserDAO, database, body } = param
        const connection = new Sequelize(database)
        const transaction = await connection.transaction();

        try {
            const user = await UserDAO.store({ User, body, transaction })

            await transaction.commit();

            return user
        } catch (error) {
            console.log('error', error)
            await transaction.rollback();
            throw error;
        } finally {
            console.log("closing connection")
            connection.close()
        }
    },

    async list(param) {

        try {
            const { User, UserDAO, body } = param

            const users = await UserDAO.list({ User, body })

            return users
        } catch (error) {
            console.log('error', error)
        }
    },

    async findById(param) {

        try {
            const { User, UserDAO, body } = param
            const { user_id } = body

            const user = await UserDAO.findById({ User, user_id })

            return user
        } catch (error) {
            console.log('error', error)
        }
    }
}