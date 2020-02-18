module.exports = {
    async store(param) {

        const {User, body, transaction} = param

        const user = await User.create(body, {
            transaction: transaction
        })

        return user
    },

    async list(param) {

        const {User, body, transaction} = param
        
        const users = await User.findAll()

        return users
    }
}