const AppError = require("../utils/AppError");


class UsersController {
    create(request, response) {
        const { name, email, password } = request.body; //corpo da requisição

        if (!name) {
            throw new AppError("Nome é obrigatorio!");
        }

        
        response.json({ name, email, password });
    }
}

module.exports = UsersController;