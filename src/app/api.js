import axios from "axios";

export const apiRoot = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})