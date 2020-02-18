module.exports = {
    async store(param) {

        const { User, body, transaction } = param

        const user = await User.create(body, {
            transaction: transaction
        })

        return user
    },

    async list(param) {

        const { User } = param

        const users = await User.findAll()

        return users
    },

    async findById(param) {
        const { User, user_id } = param

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });

        return user
    }
}