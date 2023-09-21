require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const cors = require("cors");
const express = require("express");   //importou express
const routes = require("./routes");  //se tu nao especifica qual file dentro de routes ele automaticamnte abre o index


migrationsRun();  //executar o banco de dados


const app = express();  //vai atender solicitações
app.use(cors());  //permite o backend atender as requisições do frontend
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);


app.use((error, request, response, next) => {
    if (error instanceof AppError) {
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


const PORT = 3333;   //definiu porta que vai ser usada
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



