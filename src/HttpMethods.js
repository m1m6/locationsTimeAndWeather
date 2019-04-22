import axios from "axios"

export const doGetRequest = async (endpoint) => {
  return await axios.get(endpoint)
}
