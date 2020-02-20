module.exports = {
    async store(param) {

        const { ModelFactory, body, transaction } = param
        const { User } = ModelFactory

        const user = await User.create(body, {
            transaction: transaction
        })

        return user
    },

    async list(param) {

        const { ModelFactory } = param
        const { User } = ModelFactory

        const users = await User.findAll()

        return users
    },

    async findById(param) {
        const { ModelFactory, user_id } = param
        const { User } = ModelFactory

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses', association: 'friends'}
        });

        return user
    }
}