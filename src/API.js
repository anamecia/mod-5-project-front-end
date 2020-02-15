const railsBaseUrl = 'http://localhost:3000/'
const signInUrl = railsBaseUrl + 'signin'

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

export default { signIn }