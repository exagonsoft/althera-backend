import  mysql  from "promise-mysql"; 
import config from "../../config"

const connectionPool = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.admin,
    password: config.password,
    connectionLimit: 50,
    acquireTimeout: 60000
})

const GetConnection = async () => {
    return connectionPool
}

module.exports = {
    GetConnection
}