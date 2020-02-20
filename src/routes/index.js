module.exports = function (app) {

    const { ControllerFactory } = app.src.factories    
    const { AddressController, UserController, FriendController } = ControllerFactory

    app.get('/', (req, res) => { return res.json({ hello: 'world' }) })

    app.post('/users', UserController.store)
    app.get('/users', UserController.list)

    app.post('/users/:user_id/addresses', AddressController.store)
    app.get('/users/:user_id/addresses', AddressController.list)

    app.post('/users/:user_id/friends', FriendController.store)
    app.get('/users/:user_id/friends', FriendController.list)
}