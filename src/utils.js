import * as CONSTANTS from './constants'
import flow from 'lodash/flow'

const getBaseEndpoint = (requestedApi) => {
    if (requestedApi === CONSTANTS.ENDPOINTS.weather || requestedApi === CONSTANTS.ENDPOINTS.timezone){
        return `${CONSTANTS.BASE_URL}${requestedApi}`
    }
    throw new Error('please provide valid endpoint')
}

const appendApiKeyToRequestURL = (url) => {
    return `${url}?key=${CONSTANTS.API_KEY}`
}

const getEndpointWithApiKey = flow([getBaseEndpoint, appendApiKeyToRequestURL])

export const getEndpoint = (requestedApi, query, format) => {
    if (!query){
        throw new Error('please provide valid query')
    }

    if (!format){
        throw new Error('please provide valid format')
    }
    return `${getEndpointWithApiKey(requestedApi)}&q=${encodeURI(query)}&format=${format}`
}
