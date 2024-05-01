import { api } from "./config";

export const favouriteOutfit = async(body) => {
    const { data } = await api.post('/outfit', body)
    console.log(data)
    return data 
}

export const getFavouriteOutfit = async(token) => {
    const {data} = await api.get('/outfit/favourite', {
        headers: {
            Authorization: token
        }
    })
    return data
}

export const deleteOutfitById = async(id) => {
    const token = localStorage.getItem('token')
    const {data} = await api.delete(`/outfit/favourite/${id}`, {
        headers: {
            Authorization: token
        }
    })

    console.log(data)
    return data
}