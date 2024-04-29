import { api } from "./config";

export const signUp = async(body) => {
    const { data } = await api.post('auth/signup', body)
    return data
}

export const login = async (body) => {
    const {data} = await api.post('auth/login', body)
    console.log(data)
    return data
} 