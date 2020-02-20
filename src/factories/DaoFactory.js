module.exports = (app) => {

    const { AddressDAO, FriendDAO, UserDAO } = app.src.daos

    return { AddressDAO, FriendDAO, UserDAO }
}