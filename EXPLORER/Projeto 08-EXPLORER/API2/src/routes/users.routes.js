const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();


const usersController = new UsersController();


//Query Params  ... não é obrigatorio ter os parametros para abrir a rota!
usersRoutes.post("/", usersController.create);


//exportar userRoutes 
module.exports = usersRoutes;
