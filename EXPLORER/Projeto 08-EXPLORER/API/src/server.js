const express = require("express");

const app = express(); //inicializar o express


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); //app fica escutando o PORT 