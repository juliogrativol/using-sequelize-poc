module.exports = function (app) {

    const { UserController } = app.src.controllers;
    const { AddressController } = app.src.controllers;
    const { FriendController } = app.src.controllers;

    app.get('/', (req, res) => { return res.json({ hello: 'world' }) })

    app.post('/users', UserController.store)
    app.get('/users', UserController.list)

    app.post('/users/:user_id/addresses', AddressController.store)
    app.get('/users/:user_id/addresses', AddressController.list)

    app.post('/users/:user_id/friends', FriendController.store)
    app.get('/users/:user_id/friends', FriendController.list)
}