import axios from "axios";


// esse código permite tu incurtar rotas... api.get("users/:id")
export const api = axios.create({
    baseURL: "http://localhost:3333"
});