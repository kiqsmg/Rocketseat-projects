const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");


function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("JWT Token não informado", 401);
    }

    const [, token] = authHeader.split(" "); //Bearer  xxxxxxxx

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret);  //verificando se o token é valido

        request.user = {
            id: Number(user_id),
        };

        return next();
    } catch {
        throw new AppError("JWT Token invalid", 401);
    }
}

module.exports = ensureAuthenticated;