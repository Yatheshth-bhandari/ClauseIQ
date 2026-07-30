import axios from "axios";

const api = axios.create({
    baseURL: "https://clauseiq-backend-cfuz.onrender.com/api"
});

export default api;