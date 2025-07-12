import axios from "axios";

const api = axios.create({
  baseURL: "https://xyz-qb6s.onrender.com/api", // adjust if your backend uses /api prefix
});

export default api;
