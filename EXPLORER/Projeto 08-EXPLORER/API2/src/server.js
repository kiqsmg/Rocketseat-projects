const express = require("express");   //importou express

const app = express();  //vai atender solicitações
app.use(express.json());


const PORT = 3333;   //definiu porta que vai ser usada
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



