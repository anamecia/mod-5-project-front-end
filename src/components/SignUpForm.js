import React, { Component } from 'react'

import API from '../API'

class SignUpForm extends Component {
    state = {
        username: '',
        dateOfBirth: '',
        password: '',
        passwordConfirmation: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        API.signUp(this.state.username, this.state.dateOfBirth, this.state.password, this.state.passwordConfirmation)
        .then(data => {
            if (data.error) throw Error(data.error)
            this.props.signIn(data)
            this.props.history.push('/') 
            }).catch(error => alert(error)) //change alert to a nicer notification
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input onChange={this.handleChange} type='text' name='username'/>
                    <label>Date of Birth</label>
                    <input onChange={this.handleChange} type='date' name='dateOfBirth'/>
                    <label>Password</label>
                    <input onChange={this.handleChange} type='password' name='password'/>
                    <label>Password Confirmation</label>
                    <input onChange={this.handleChange} type='password' name='passwordConfirmation'/>
                    <input type='submit'/>
                </form>
            </div>
        )
    } 
}

export default SignUpForm