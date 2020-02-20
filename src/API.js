const railsBaseUrl = 'http://localhost:3000/'
const signInUrl = railsBaseUrl + 'signin'
const signUpUrl = railsBaseUrl + 'signup'
const validateUrl = railsBaseUrl + 'validate'
const medicinesUrl = railsBaseUrl + 'medicines'
const userMedicinesUrl = railsBaseUrl + 'usermedicines'

const weatherBreezoApi = 'https://api.breezometer.com/weather/v1/current-conditions?'
const airQualityBreezoApi = 'https://api.breezometer.com/air-quality/v2/current-conditions?'
const pollenCountBreezoApi = 'https://api.breezometer.com/pollen/v2/forecast/daily?'



const get = (url) => {
    return fetch(url).then(resp => resp.json())
}

const getWithAuth = (url) => {
    return fetch(url, {
        headers: {
            Authorization: localStorage.token
        }
    }).then(resp => resp.json())
}

const post = (url,data) => {
    return fetch(url,{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json())
}

const signIn = (username, password) => post(signInUrl,{username, password})

const signUp = (username, dateOfBirth, password, passwordConfirmation) => post(signUpUrl, {user: {username, date_of_birth: dateOfBirth, password, password_confirmation: passwordConfirmation}})

const validate = () => getWithAuth(validateUrl)

const getMedicines = () => get(medicinesUrl) 

const getUserMedicines = () => getWithAuth(userMedicinesUrl)

const getWeather = (latitude, longitude, breezoKey) => get(weatherBreezoApi + `lat=${latitude}&lon=${longitude}&key=${breezoKey}`)

const getAirQuality = (latitude, longitude, breezoKey) => get(airQualityBreezoApi + `lat=${latitude}&lon=${longitude}&key=${breezoKey}`)

const getAirPollutants = (latitude, longitude,breezoKey) => get(airQualityBreezoApi + `lat=${latitude}&lon=${longitude}&key=${breezoKey}&features=health_recommendations, pollutants_concentrations, sources_and_effects`)

const getPollenCount = (latitude, longitude, breezoKey) => get(pollenCountBreezoApi + `lat=${latitude}&lon=${longitude}&key=${breezoKey}&features=types_information,plants_information&days=1`) 

export default { signIn, signUp, validate, getWeather, getAirQuality, getAirPollutants , getPollenCount, getMedicines, getUserMedicines}