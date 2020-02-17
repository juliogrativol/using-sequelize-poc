const express = require('express')
const routes = express.Router()
const UserController = require('./controller/UserController')
const AddressController = require('./controller/AddressController')
const FriendController = require('./controller/FriendController')

routes.get('/', (req, res) => { return res.json({ hello: 'world' }) })

routes.post('/users', UserController.store)
routes.get('/users', UserController.list)

routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.list)

routes.post('/users/:user_id/friends', FriendController.store)
routes.get('/users/:user_id/friends', FriendController.list)

module.exports = routes