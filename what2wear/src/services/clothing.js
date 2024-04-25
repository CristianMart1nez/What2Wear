import { api } from "./config";

export const getAllClothing = async() => {
    const { data } = await api.get('clothing/')
    return data
}

export const getOneClothing = async (id) => {
    const {data} = await api.get(`clothing/${id}`)
    return data
}