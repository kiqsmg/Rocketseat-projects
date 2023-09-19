const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");  //middleware de autentificação, captura id do usuario

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);


const usersController = new UsersController();
const userAvatarController = new UserAvatarController();


//Query Params  ... não é obrigatorio ter os parametros para abrir a rota!
usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);  //antes do middleware precisava por "/id"
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)  //patch atualiza um campo especifico ao inves do put que é mais geral


//exportar userRoutes 
module.exports = usersRoutes;
