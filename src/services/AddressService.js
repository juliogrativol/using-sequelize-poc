module.exports = {
    async store(param) {
        const { ConnectionFactory, ModelFactory, DaoFactory, body } = param
        const { connection } = ConnectionFactory
        const transaction = await connection.transaction();
        const {UserDAO, AddressDAO} = DaoFactory

        const { user_id } = body

        try {
            const user = await UserDAO.findById({ ModelFactory, user_id });

            if (!user) {
                return res.status(400).json({ error: 'user not found' })
            }

            const address = await AddressDAO.store({ ModelFactory, body, transaction })

            await transaction.commit();

            return address
        } catch (error) {
            console.log('error', error)
            await transaction.rollback();
            throw error;
        }
    }
}