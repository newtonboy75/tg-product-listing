import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Axios config
const axiosInterceptor = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api", // Default to Laravel API URL
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Request Interceptor
axiosInterceptor.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Attach token here if implemented
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInterceptor.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // Handle specific error responses
            console.error(
                `Error ${error.response.status}: ${error.response.data.message}`
            );
        } else if (error.request) {
            console.error("No response from server.");
        } else {
            console.error("Error setting up request:", error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInterceptor;
