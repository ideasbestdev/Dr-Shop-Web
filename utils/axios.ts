import axios from "axios";
import { baseUrl, headers } from "./config";
import { TOKEN_KEY_NAME } from '@/utils/index';
import { getDeviceId, uuidv4 } from "@/helpers/index";
import Cookies from 'js-cookie';

//axios.defaults.withCredentials = true;

const http = axios.create({
    baseURL: baseUrl,
});

http.interceptors.request.use(function (config: any) {
    const token = Cookies.get(TOKEN_KEY_NAME);
    config.headers['Content-Type'] = "multipart/form-data";
    config.headers.common.Accept = "multipart/form-data";
    config.headers['x-device-id'] = getDeviceId();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});



export default http;