const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");  //middleware de autentificação, captura id do usuario

const notesRoutes = Router();


notesRoutes.use(ensureAuthenticated);


const notesController = new NotesController();


//Query Params  ... não é obrigatorio ter os parametros para abrir a rota!

notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/", notesController.index);



//exportar userRoutes 
module.exports = notesRoutes;
