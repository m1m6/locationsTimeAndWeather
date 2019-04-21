import axios from "axios"

export const doGet = async (endpoint) => {
    return await axios.get(endpoint)
}
