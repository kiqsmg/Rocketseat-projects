const { Router } = require("express");

const usersRouter = require("./users.routes");   //grupo de rotas do usuario

const routes = Router();

// 3º Nesse local ele vai dar de cara com o /users e dizer "achei o /users que o caique quer acessar", ai vai levar a gente pro arquivo userRouter

routes.use("/users", usersRouter)

module.exports = routes;