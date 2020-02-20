const Sequelize = require('sequelize')

module.exports = (app) => {

    const { dbConfig } = app.src.config
    const connection = new Sequelize(dbConfig)

    return { connection }

}
