const path = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "..", "database.sqlite"),
});


var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "database.sqlite"

let base = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        
    }
});


module.exports = base


module.exports = sequelize;