import { Router } = require("express");

const usersRoutes = Router();

//Query Params  ... não é obrigatorio ter os parametros para abrir a rota!
usersRoutes.post("/users", (request, response) => {
    const { name, email, password } = request.body;

    //Enviar em formato JSON =>
    response.json({ name, email, password });
});

module.exports = usersRoutes;
