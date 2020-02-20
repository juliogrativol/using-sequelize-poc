module.exports = {
    async store(param) {
        const { ModelFactory, body, transaction } = param
        const { Friend } = ModelFactory

        const friend = await Friend.create(body, {
            transaction: transaction
        })

        return friend
    },
    
    async addUser(param) {
        const { friend, user } = param

        return await friend.addUser(user)
    }
}