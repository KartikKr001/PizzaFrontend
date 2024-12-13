import axios from "axios";

const axiosInstance = axios.create(); //  Create an instance of axios

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL  // set base url

axiosInstance.defaults.withCredentials = true  // Allows cookies to be sent with requests

export default axiosInstance; // Export the instance


