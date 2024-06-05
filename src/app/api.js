import axios from "axios";

export const apiRoot = axios.create({
    baseURL:"http://192.168.68.107:8008"
})