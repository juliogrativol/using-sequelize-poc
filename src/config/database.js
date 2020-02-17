module.exports = {
    dialect : 'mysql',
    host : 'localhost',
    username : 'root',
    password : 'root',
    database : 'mydatabase', 
    define : {
        timestamp : true,
        underscored : true,
 
    },
    pool: {
        max: 3000,
        min: 0,
        idle: 10000
      },
}