import * as CONSTANTS from "./constants"
import { doGet } from "./HttpMethods"
import { getEndpoint } from "./utils"

const fetchLocations = (locations) => {
    locations.forEach(async (location) => {
        try{
            const locationEndpointUrl = getEndpoint(CONSTANTS.ENDPOINTS.weather, location, CONSTANTS.API_FORMAT.JSON)
            const timezoneEndpointUrl = getEndpoint(CONSTANTS.ENDPOINTS.timezone, location, CONSTANTS.API_FORMAT.JSON)

            const locationResponse = await doGet(locationEndpointUrl)
            const timezoneResponse = await doGet(timezoneEndpointUrl)

            console.log(`${location} weather: ${locationResponse.data.data.current_condition[0].weatherDesc[0].value}`)
            console.log(`${location} timezone: ${timezoneResponse.data.data.time_zone[0].localtime}`)
        }catch(e){
            console.error(e)
        }
    })
}

fetchLocations(["New york", "10005", "Tokyo", "São Paulo", "Pluto"])
