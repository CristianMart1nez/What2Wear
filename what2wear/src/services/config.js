import axios from "axios";

export const api = axios.create({
    baseURL: 'mysql-what2wear-projectwhat2wear.e.aivencloud.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}) 
