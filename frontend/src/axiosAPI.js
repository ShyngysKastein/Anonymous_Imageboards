import axios from "axios";
import threadAPI from "./config";

export default axios.create({
    baseURL:threadAPI
})