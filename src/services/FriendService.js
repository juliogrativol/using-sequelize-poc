module.exports = {
    async store(param) {
        const { ConnectionFactory, ModelFactory, DaoFactory, body } = param
        const { connection } = ConnectionFactory
        const transaction = await connection.transaction();
        const { UserDAO, FriendDAO } = DaoFactory

        const { user_id } = body

        try {
            const user = await UserDAO.findById({ ModelFactory, user_id });

            if (!user) {
                return res.status(400).json({ error: 'user not found' })
            }

            const friend = await FriendDAO.store({ ModelFactory, body })
            
            await FriendDAO.addUser({ friend, user })

            await transaction.commit();

            return friend
        } catch (error) {
            console.log(error)
            await transaction.rollback();
            throw error;
        }
    }
}