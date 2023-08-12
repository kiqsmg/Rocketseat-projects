const express = require('express');   //importou express


const app = express();  //vai atender solicitações


//Route Params  ... é obrigatorio ter os parametros para abrir a rota

app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params;

    response.send(`Mensagem ID: ${id}.
    User: ${user}`);
})


//Query Params  ... não é obrigatorio ter os parametros para abrir a rota!
app.get("/users", (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página: ${page} e mostrar: ${limit}`);
})

const PORT = 3333;   //definiu porta que vai ser usada
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



