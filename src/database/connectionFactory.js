const Sequelize = require('sequelize')

module.exports = (app) => {

    const { database } = app.src.config
    const connection = new Sequelize(database)

    return { connection }

}
