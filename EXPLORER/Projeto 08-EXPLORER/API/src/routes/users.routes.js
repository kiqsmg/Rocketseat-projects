
// 4º Chegamos nas rotas do usuario, e queremos trabalhar com a raiz, pois já chegamos onde queriamos chegar.... raiz => (/)

const { Router } = require("express");

const usersRoutes = Router();


usersRoutes.post("/", function (request, response) {

    const {name, email, password} = request.body;

    response.json({ name, email, password});        //aqui pega em formato json e devolve em formato json
});

module.exports = usersRoutes;