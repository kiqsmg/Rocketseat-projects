const sqliteConnection = require('../../sqlite');

const createUsers = require('./createUsers');

async function migrationsRun(){
    const schemas = [
        createUsers        //migrations
    ].join('');            //junta todas as migrations

    sqliteConnection().then(db => db.exec(schemas)).catch(error => console.log(error)); //se der erro tem o catch error
}


module.exports = migrationsRun;