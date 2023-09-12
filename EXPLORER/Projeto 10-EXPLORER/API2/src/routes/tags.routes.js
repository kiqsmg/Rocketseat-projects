const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");  //middleware de autentificação, captura id do usuario


const tagsRoutes = Router();


const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);


//exportar userRoutes 
module.exports = tagsRoutes;
