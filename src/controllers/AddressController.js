const { User, Address } = require('sequelize-poc');

module.exports = {
    async store(req, res, next) {

        try {
            const { user_id } = req.params
            const { zipcode, street, number } = req.body
            const { AddressService } = req.app.src.services
            const { AddressDAO, UserDAO } = req.app.src.daos
            const { database } = req.app.src.config

            const body = { user_id, zipcode, street, number }
            const address = await AddressService.store({ Address, User, AddressDAO, UserDAO, database, body })

            return res.json(address)
        } catch (error) {
            console.log('error', error)

            return res.status(500).json({ message: error })
        }
    },

    async list(req, res, next) {

        try {
            const { user_id } = req.params
            const { UserService } = req.app.src.services
            const { UserDAO } = req.app.src.daos
            const { database } = req.app.src.config
            const body = { user_id }

            const user = await UserService.findById({ User, UserDAO, database, body })

            return res.json(user.addresses)

        } catch (error) {
            console.log('error', error)

            return res.status(500).json({ message: error })
        }
    }
}