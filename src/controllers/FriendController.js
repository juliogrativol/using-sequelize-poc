module.exports = {
    async store(req, res, next) {

        try {

            const { ServiceFactory, DaoFactory, ModelFactory } = req.app.src.factories
            const { ConnectionFactory } = req.app.src.database

            const { FriendService } = ServiceFactory
            const { user_id } = req.params
            const { name, email } = req.body
            const body = { user_id, name, email }

            const friend = await FriendService.store({ ModelFactory, DaoFactory, ConnectionFactory, body })

            return res.json(friend)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    },

    async list(req, res, next) {

        try {
            const { ServiceFactory, DaoFactory, ModelFactory } = req.app.src.factories
            const { UserService } = ServiceFactory

            const { user_id } = req.params
            const body = { user_id }

            const user = await UserService.findById({ ModelFactory, DaoFactory, body })

            return res.json(user.friends)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}