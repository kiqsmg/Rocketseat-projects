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