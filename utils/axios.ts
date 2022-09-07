import axios from "axios";
import {headers} from "./config";

export default axios.create({
    headers: headers,
})