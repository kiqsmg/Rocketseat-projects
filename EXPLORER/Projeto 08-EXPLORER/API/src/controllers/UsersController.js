const AppError = require("../utils/AppError");

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

    create(request, response) {
        const {name, email, password} = request.body;

        if(!name){ //caso nao tenha sido enviado dado de nome...
            throw new AppError("O nome é obrigatório.");
        }

        response.json({ name, email, password });        //aqui pega em formato json e devolve em formato json
    }
}


module.exports = UsersController;

// 7º Agora itremos voltar o caminho feito até agora... o controllers volta pro Route