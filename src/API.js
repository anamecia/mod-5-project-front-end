const railsBaseUrl = 'http://localhost:3000/'
const signInUrl = railsBaseUrl + 'signin'
const signUpUrl = railsBaseUrl + 'signup'
const validateUrl = railsBaseUrl + 'validate'

const weatherBreezoApi = `https://api.breezometer.com/weather/v1/current-conditions?`

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

const getWeather = (latitude, longitude, breezoKey) => get(weatherBreezoApi + `lat=${latitude}&lon=${longitude}&key=${breezoKey}`)

export default { signIn, signUp, validate, getWeather}