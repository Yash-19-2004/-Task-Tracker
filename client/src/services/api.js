import axios from "axios";

const api = axios.create({
  baseURL: "https://name-task-tracker-api.onrender.com",
});

export default api;