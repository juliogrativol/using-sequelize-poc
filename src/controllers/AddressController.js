module.exports = {
    async store(req, res, next) {

        try {
            
            const { ServiceFactory, DaoFactory, ModelFactory } = req.app.src.factories
            const { ConnectionFactory } = req.app.src.database

            const { AddressService } = ServiceFactory
            const { user_id } = req.params
            const { zipcode, street, number } = req.body
            const body = { user_id, zipcode, street, number }

            const address = await AddressService.store({ ModelFactory, DaoFactory, ConnectionFactory, body })

            return res.json(address)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    },

    async list(req, res, next) {

        try {

            const { ServiceFactory, DaoFactory, ModelFactory } = req.app.src.factories
            const { ConnectionFactory } = req.app.src.database

            const { UserService } = ServiceFactory
            const { user_id } = req.params
            const { zipcode, street, number } = req.body
            const body = { user_id, zipcode, street, number }

            const user = await UserService.findById({ ModelFactory, DaoFactory, ConnectionFactory, body })

            return res.json(user.addresses)

        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}