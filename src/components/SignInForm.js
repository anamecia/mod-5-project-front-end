import React, { Component } from 'react'

import API from '../API'

class SignInForm  extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        API.signIn(this.state.username, this.state.password)
        .then(data => {
            if (data.error) throw Error(data.error)
            this.props.signIn(data)
            this.props.history.push('/') //redirects the user to their page 
        }).catch(error => alert(error))  //change alert to a nicer notification
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input onChange={this.handleChange} type='text' name='username'/>
                    <label>Password</label>
                    <input onChange={this.handleChange} type='password' name='password'/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default SignInForm