module.exports = (app) => {

    const { AddressService, FriendService, UserService } = app.src.services

    return { AddressService, FriendService, UserService }
}