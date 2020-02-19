module.exports = {

    async store(param) {

        let connection
        
        const { connectionFactory, database, UserDAO, body } = param
        connection = await connectionFactory.getConnection(database)
        const transaction = await connection.connection.transaction();

        try {
            const { User } = connection
            const user = await UserDAO.store({ User, body, transaction })

            await transaction.commit();

            return user
        } catch (error) {
            console.log('error', error)
            await transaction.rollback();
            throw error;
        } finally {
            console.log("closing connection")
            connection.connection.close()
        }
    },

    async list(param) {

        let connection

        try {
            const { connectionFactory, database, UserDAO } = param
            connection = await connectionFactory.getConnection(database)
            const { User } = connection

            const users = await UserDAO.list({ User })

            return users
        } catch (error) {
            console.log('error', error)
        } finally {
            try {
                connection.connection.close()
                console.log("connection closed")
            } catch (error) {
                console.log(error)
            }
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