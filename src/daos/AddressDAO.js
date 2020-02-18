module.exports = {
    async store(param) {
        const { Address, body, transaction } = param

        const address = await Address.create(body, {
            transaction: transaction
        })

        return address
    },

    async list(param) {
        
    }
}