import * as CONSTANTS from "./constants"
import { doGetRequest } from "./httpMethods"
import { getEndpoint, checkResponseStatusIsOk } from "./utils"

export const fetchLocationsWeather = locations => {
  locations.forEach(async location => {
    try {
      const locationEndpointUrl = getEndpoint(
        CONSTANTS.ENDPOINTS.weather,
        location,
        CONSTANTS.API_FORMAT.JSON
      )

      const locationResponse = await doGetRequest(locationEndpointUrl)

      if (checkResponseStatusIsOk(locationResponse)) {
        console.log(
          `${location} weather: ${
            locationResponse.data.data.current_condition[0].weatherDesc[0].value
          }`
        )
      }
    } catch (e) {
      console.error(e)
    }
  })
}

export const fetchLocationsTimezone = locations => {
  locations.forEach(async location => {
    try {
      const timezoneEndpointUrl = getEndpoint(
        CONSTANTS.ENDPOINTS.timezone,
        location,
        CONSTANTS.API_FORMAT.JSON
      )
      const timezoneResponse = await doGetRequest(timezoneEndpointUrl)

      if (checkResponseStatusIsOk(timezoneResponse)) {
        console.log(
          `${location} timezone: ${
            timezoneResponse.data.data.time_zone[0].localtime
          }`
        )
      }
    } catch (e) {
      console.error(e)
    }
  })
}

console.log("NODE_ENV", process.env.NODE_ENV)

if (!process.env.NODE_ENV.includes("test")) {
  fetchLocationsWeather(["New york", "10005", "Tokyo", "São Paulo", "Pluto"])
  fetchLocationsTimezone(["New york", "10005", "Tokyo", "São Paulo", "Pluto"])
}