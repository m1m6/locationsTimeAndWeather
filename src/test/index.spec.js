import { expect } from "chai"
import nock from 'nock'
import { fetchLocationsWeather, fetchLocationsTimezone } from '../index'
import * as CONSTANTS from '../constants'
import { getEndpoint } from '../utils'
import newYorkWeatherResponse from './newYorkWeatherResponse'
import newYorkTimezoneResponse from './newYorkTimezoneResponse'

describe('[Index]', function () {
    describe('[fetchLocationsWeather]', function () {
        it('should return valid response for new york weather without error', async () => {
            nock('http://api.worldweatheronline.com/premium/v1/')
            .get('/weather.ashx?key=aba319dbee4d4d34901121516191904&q=New%20york&format=json')
            .reply(200, {newYorkWeatherResponse})
            return await fetchLocationsWeather(["New York"])
        })
    })

    describe('[fetchLocationsTimezone]', function () {
        it('should return valid response for new york timezone without error', async () => {
            nock('http://api.worldweatheronline.com/premium/v1/')
            .get('/tz.ashx?key=aba319dbee4d4d34901121516191904&q=New%20york&format=json')
            .reply(200, {newYorkTimezoneResponse})
            return await fetchLocationsTimezone(["New York"])
        })
    })
})