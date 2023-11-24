const mySql =  require("mysql2")
const db = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "latihan_db",     
})

module.exports = db