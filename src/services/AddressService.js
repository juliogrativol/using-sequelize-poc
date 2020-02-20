module.exports = {
    async store(param) {
        const { Address, AddressDAO, User, UserDAO, database, body } = param
        const connection = new Sequelize(database)
        const transaction = await connection.transaction();

        const { user_id } = body

        try {
            const user = await UserDAO.findById({ User, user_id });

            if (!user) {
                return res.status(400).json({ error: 'user not found' })
            }

            const address = await AddressDAO.store({ Address, body, transaction })

            await transaction.commit();

            return address
        } catch (error) {
            console.log('error', error)
            await transaction.rollback();
            throw error;
        }
    }
}