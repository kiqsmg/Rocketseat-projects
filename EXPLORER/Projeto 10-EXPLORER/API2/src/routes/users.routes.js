const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");  //middleware de autentificação, captura id do usuario

const usersRoutes = Router();


const usersController = new UsersController();


//Query Params  ... não é obrigatorio ter os parametros para abrir a rota!
usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);  //antes do middleware precisava por "/id"


//exportar userRoutes 
module.exports = usersRoutes;
