const sqlite3 = require("sqlite3");   //importando drive que vai utilizar
const sqlite = require("sqlite");     //o que vai ser utilizado para conecatar
const path = require("path");


async function sqliteConnection(){         //cria ou conecta 
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });

    return database;
}


module.exports = sqliteConnection