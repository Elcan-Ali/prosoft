import axios from "axios";

export const Api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL+"api/",
    headers: { 'Content-Type': "application/json" }
});