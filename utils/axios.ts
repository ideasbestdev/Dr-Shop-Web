import axios from "axios";
import { baseUrl, headers } from "./config";
import { TOKEN_KEY_NAME } from '@/utils/index';

axios.defaults.withCredentials = true;

const http = axios.create({
    baseURL: baseUrl,
    headers: headers,
});

http.interceptors.request.use(function (config: any) {
    const token = localStorage.getItem(TOKEN_KEY_NAME);
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default http;