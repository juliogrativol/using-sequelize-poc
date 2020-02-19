const { User } = require('sequelize-poc')

module.exports = {
    async store(req, res, next) {

        try {
            const { name, email } = req.body
            const { UserService } = req.app.src.services
            const { UserDAO } = req.app.src.daos
            const { database } = req.app.src.config
            const { connectionFactory } = req.app.src.database

            const body = { name, email }

            const user = await UserService.store({ connectionFactory, UserDAO, database, body })

            return res.json(user)
        } catch (error) {
            console.log('error', error)

            return res.status(500).json({ message: error })
        }
    },

    async list(req, res, next) {

        try {
            const { UserService } = req.app.src.services
            const { UserDAO } = req.app.src.daos
            const { database } = req.app.src.config
            const { connectionFactory } = req.app.src.database

            const users = await UserService.list({ connectionFactory, database, UserDAO })
            
            return res.json(users)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}