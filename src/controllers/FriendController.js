module.exports = {
    async store(req, res, next) {

        const { user_id } = req.params
        const { name, email } = req.body

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'user not found' })
        }

        const [friend] = await Friend.findOrCreate({
            where: { name, email }
        })

        await user.addFriend(friend)

        return res.json(friend)
    },

    async list(req, res, next) {

        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { association: 'friends', attributes: ['name', 'email'], through: { attributes: [] } },
        });

        if (!user) {
            return res.status(400).json({ error: 'user not found' })
        }

        return res.json(user.friends)
    }
}