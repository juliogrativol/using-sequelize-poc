module.exports = {

    async store(param) {

        const { ConnectionFactory, ModelFactory, DaoFactory, body } = param
        const { connection } = ConnectionFactory
        const transaction = await connection.transaction();
        const { UserDAO } = DaoFactory

        try {
            const user = await UserDAO.store({ ModelFactory, body, transaction })

            await transaction.commit();

            return user
        } catch (error) {
            console.log('error', error)
            await transaction.rollback();
            throw error;
        }
    },

    async list(param) {

        const { ModelFactory, DaoFactory } = param
        const { UserDAO } = DaoFactory

        try {
            const users = await UserDAO.list({ ModelFactory })

            return users
        } catch (error) {
            console.log('error', error)
        }
    },

    async findById(param) {

        try {
            const { ModelFactory, DaoFactory, body } = param
            const { UserDAO } = DaoFactory
            const { user_id } = body

            const user = await UserDAO.findById({ ModelFactory, user_id })

            return user
        } catch (error) {
            console.log('error', error)
        }
    }
}