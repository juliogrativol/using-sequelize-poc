module.exports = {
    async store(req, res, next) {

        try {
            const { name, email } = req.body

            const { ServiceFactory, DaoFactory, ModelFactory } = req.app.src.factories
            const { ConnectionFactory } = req.app.src.database

            const { UserService } = ServiceFactory
            const body = { name, email }

            const user = await UserService.store({ ConnectionFactory, ModelFactory, DaoFactory, body })

            return res.json(user)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    },

    async list(req, res, next) {

        try {
            const { ServiceFactory, DaoFactory, ModelFactory } = req.app.src.factories
            const { UserService } = ServiceFactory

            const users = await UserService.list({ ModelFactory, DaoFactory })

            return res.json(users)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}