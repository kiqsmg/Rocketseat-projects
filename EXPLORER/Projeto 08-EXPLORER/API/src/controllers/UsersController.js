const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

/*
class UserController {

     * index - GET para listar varios registros
     * show - GET para exibir um registro especifico
     * create - POST para criar um registro
     * update - PUT para atualizar um registro
     * delete - DELETE para remover um registro
}
*/


// 6º Chegamos no controller correto, ele ira fazer o processamento e resposta da requesição

class UsersController {

    async create(request, response) {
        const {name, email, password} = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists){
            throw new AppError("Este email já está em uso.");
        }

        const hashedPassword = await hash(password, 8);

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
        [name, email, hashedPassword]
        );

        return response.status(201).json();

    }
}


module.exports = UsersController;

// 7º Agora itremos voltar o caminho feito até agora... o controllers volta pro Route