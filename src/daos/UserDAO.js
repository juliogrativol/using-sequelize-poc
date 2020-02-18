module.exports = {
    async store(User, body, transaction) {

        const user = await User.create(body, {
            transaction: transaction
        })

        return user
    },

    async list(User) {
        
        const users = await User.findAll()

        return users
    }
}