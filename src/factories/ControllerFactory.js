module.exports = (app) => {

    const { AddressController, FriendController, UserController } = app.src.controllers

    return { AddressController, FriendController, UserController }
}