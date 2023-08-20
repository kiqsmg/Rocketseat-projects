const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();


const notesController = new NotesController();


//Query Params  ... não é obrigatorio ter os parametros para abrir a rota!

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);



//exportar userRoutes 
module.exports = notesRoutes;
