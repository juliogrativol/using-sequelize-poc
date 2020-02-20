module.exports = {
    async store(param) {
        const { ModelFactory, body, transaction } = param
        const { Address } = ModelFactory

        const address = await Address.create(body, {
            transaction: transaction
        })

        return address
    }
}