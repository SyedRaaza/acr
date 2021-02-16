import axios from "axios";

export const baseURL = "https://jsonplaceholder.typicode.com";

const axiosConfig = axios.create({
    baseURL
});

export default axiosConfig;