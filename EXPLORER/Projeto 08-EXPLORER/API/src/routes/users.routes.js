
// 4º Chegamos nas rotas do usuario, e queremos trabalhar com a raiz, pois já chegamos onde queriamos chegar.... raiz => (/)

const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();


/*function myMiddleware(request, response, next) {    //Função que extrai a requisição e diz pra onde ele deve seguir(next)
    console.log("voce passou pelo middleware!");

    if(!request.body.isAdmin){
        return response.json({ message: "user unauthorized"});
    }

    next();
}
*/


const usersController = new UsersController();

//usersRoutes.use(myMiddleware);       deixariamos ele aqui fora caso quisessemos aplicar ele pra todas as rotas ao inves de cada uma especifica

// 5º Chegamos nas rotas do usuario, e somos redirecionados para o controller correto => para o usersController.create
usersRoutes.post("/", usersController.create);
// usersRoutes.post("/", myMiddleware, usersController.create); rota tem o (endereço, middleware, função controller)



// 8º Agora itremos voltar o caminho feito até agora... Routes volta pro server
module.exports = usersRoutes;