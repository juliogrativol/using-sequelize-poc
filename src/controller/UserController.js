const { User} = require('sequelize-poc');

module.exports = {
    async store(req, res) {

        const { name, email } = req.body

        const user = await User.create({name, email})

        return res.json(user)
    },

    async list(req, res) {

        const users = await User.findAll()

        return res.json(users)
    }
}