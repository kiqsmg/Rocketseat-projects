require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");

/*
----------------------------------- padrao geral de server.js -----------------------------------

const express = require("express");

const app = express(); //inicializar o express

app.get("/message/:id/:user", function (request, response) {
    const {id, user} = request.params;

    response.send(`Id da mensagem: ${id}.
    Para o usuario: ${user}.`);
});


app.get("/users", (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página: ${page}. Mostrar: ${limit}`);
});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); //app fica escutando o PORT 
*/

const AppError = require("./utils/AppError");

// 1º LOcal que é aberto no programa
const express = require("express");


const routes = require("./routes")  //const routes = require("./routes/index.js")


migrationsRun();


const app = express(); //inicializar o express 
app.use(express.json());


// 2º Ele vai utilizar essas rotas (routes) na aplicação que está sendo feita, vai levar pra pasta index.js
app.use(routes);



app.use(( error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error", 
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); //app fica escutando o PORT 



// 9º Agora por ultimo iremos voltar o caminho feito até agora... Server vai devolvera resposta pro cliente