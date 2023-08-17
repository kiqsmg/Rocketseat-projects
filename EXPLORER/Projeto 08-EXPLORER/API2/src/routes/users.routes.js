const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();


const usersController = new UsersController();


//Query Params  ... não é obrigatorio ter os parametros para abrir a rota!
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);


//exportar userRoutes 
module.exports = usersRoutes;
