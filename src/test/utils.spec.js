import { expect } from "chai"
import * as utils from '../utils'
import * as CONSTANTS from '../constants'

describe('[Endpoints Utils]', () => {
    describe('[getBaseEndpoint]', function () {
        it('should generate the base endpoint url for weather endpoint', () => {
            expect(utils.getBaseEndpoint(CONSTANTS.ENDPOINTS.weather))
            .to.eql('https://api.worldweatheronline.com/premium/v1/weather.ashx')
        })
    
        it('should generate the base endpoint url for timezone endpoint', () => {
            expect(utils.getBaseEndpoint(CONSTANTS.ENDPOINTS.timezone))
            .to.eql('https://api.worldweatheronline.com/premium/v1/tz.ashx')
        })
    
        it(`it should throw an error with value (please provide valid endpoint)
         when the endpoint passed as null`, () => {
            expect(() => utils.getBaseEndpoint(null))
            .to.throw('please provide valid endpoint')
        })
    
        it(`it should throw an error with value (please provide valid endpoint)
         when the endpoint passed as undefined`, () => {
            expect(() => utils.getBaseEndpoint(undefined))
            .to.throw('please provide valid endpoint')
        })
    })

    describe('[getEndpointWithApiKey]', function () {
        it('should generate the url with api key for weather endpoint', () => {
            expect(utils.getEndpointWithApiKey(CONSTANTS.ENDPOINTS.weather))
            .to.eql('https://api.worldweatheronline.com/premium/v1/weather.ashx?key=aba319dbee4d4d34901121516191904')
        })

        it('should generate the url with api key for timezone endpoint', () => {
            expect(utils.getEndpointWithApiKey(CONSTANTS.ENDPOINTS.timezone))
            .to.eql('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=aba319dbee4d4d34901121516191904')
        })

        it(`it should throw an error with value (please provide valid endpoint)
         when the endpoint passed as null`, () => {
            expect(() => utils.getEndpointWithApiKey(null))
            .to.throw('please provide valid endpoint')
        })

        it(`it should throw an error with value (please provide valid endpoint)
         when the endpoint passed as null`, () => {
            expect(() => utils.getEndpointWithApiKey(undefined))
            .to.throw('please provide valid endpoint')
        })
    })

    describe('[getEndpoint]', function () {
        it('should generate the complete url weather endpoint with valid query and format', () => {
            expect(utils.getEndpoint(CONSTANTS.ENDPOINTS.weather, "New York", CONSTANTS.API_FORMAT.JSON))
            .to.eql('https://api.worldweatheronline.com/premium/v1/weather.ashx?key=aba319dbee4d4d34901121516191904&q=New%20York&format=json')
        })

        it('should generate the complete url timezone endpoint with valid query and format', () => {
            expect(utils.getEndpoint(CONSTANTS.ENDPOINTS.timezone, "New York", CONSTANTS.API_FORMAT.XML))
            .to.eql('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=aba319dbee4d4d34901121516191904&q=New%20York&format=xml')
        })

        it(`it should throw an error with value (please provide valid query)
         when the query passed as null`, () => {
            expect(() => utils.getEndpoint(CONSTANTS.ENDPOINTS.timezone, null, CONSTANTS.API_FORMAT.XML))
            .to.throw('please provide valid query')
        })

        it(`it should throw an error with value (please provide valid format)
         when the format passed as null`, () => {
            expect(() => utils.getEndpoint(CONSTANTS.ENDPOINTS.timezone, "New york", null))
            .to.throw('please provide valid format')
        })
    })
})