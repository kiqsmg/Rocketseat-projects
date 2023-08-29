const express = require("express");

const app = express();
app.use(express.json());

app.get("/users", (request, response) => {
    const { name, email, password } = request.body;

    response.send(`Usuario: ${name}, Email: ${email}, senha: ${password}`);
});


const PORT = 3333;
app.listen(PORT, () => console.log(`server is runing on Port ${PORT}`));