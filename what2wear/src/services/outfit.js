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
