
const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();


function mymiddleware(request, response, next) {
    console.log("Você passou pelo middleware");

    if (!request.body.isAdmin) {
        return response.json({ message: "user unauthorized" });
    }

    next();
}






const usersController = new UsersController();


usersRoutes.post("/", mymiddleware, usersController.create);

module.exports = usersRoutes;