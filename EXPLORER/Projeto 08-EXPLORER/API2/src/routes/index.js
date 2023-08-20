//esse file vai reunir todos os grupos de rotas............................

const { Router } = require("express");

const usersRouter = require("./users.routes");    //grupo de rotas do usuario
const notesRouter = require("./notes.routes");


const routes = Router();
routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);


module.exports = routes;