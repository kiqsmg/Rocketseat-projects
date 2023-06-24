//Padronizar qual tipo de mensagem vaaparecer quando houver erro

class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;