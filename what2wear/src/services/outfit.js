import { api } from "./config";

export const favouriteOutfit = async(body) => {
    const { data } = await api.post('/outfit', body)
    console.log(data)
    return data
}
