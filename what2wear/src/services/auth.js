import { api } from "./config";

export const signUp = async(body) => {
    const {data} = await api.post('auth/register', body)
    return data
}

export const login = async () => {
    const {data} = await api.post('auth/login')
    return data
}