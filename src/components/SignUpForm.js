import React, { Component } from 'react'

import API from '../API'
var moment = require('moment');



const initialState = {
    username: '',
    dateOfBirth: '',
    password: '',
    passwordConfirmation: '',
    usernameErrors: '',
    dateOfBirthErrors: '',
    passwordErrors: '',
    passwordConfirmationErrors: ''

}

class SignUpForm extends Component {
    state = {
        username: '',
        dateOfBirth: '',
        password: '',
        passwordConfirmation: '',
        usernameErrors: '',
        dateOfBirthErrors: '',
        passwordErrors: '',
        passwordConfirmationErrors: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    validate = () => {
        let usernameErrors = ''
        let dateOfBirthErrors = ''
        let passwordErrors = ''
        let passwordConfirmationErrors=''

        if (this.state.password !== this.state.passwordConfirmation)
            passwordErrors = 'Password and Password Confirmation are not the same'

        if (this.state.password.length < 8)
            passwordErrors = 'Password must be at least 8 characters'

        if (moment(this.state.dateOfBirth) > new Date())
            dateOfBirthErrors = 'Invalid Date'
        if (!this.state.username)
            usernameErrors = 'Username is required'

         if (!this.state.dateOfBirth)
            dateOfBirthErrors = 'Date of Birth is required'

        if (!this.state.password)
            passwordErrors = 'Password is required'

        if (!this.state.passwordConfirmation)
            passwordConfirmationErrors = 'Password Confirmation is required'

        if (usernameErrors || dateOfBirthErrors || passwordErrors || passwordConfirmationErrors){
            this.setState({usernameErrors, dateOfBirthErrors, passwordErrors, passwordConfirmationErrors})
            return false
        }

        return true 
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(this.validate()){
            API.signUp(this.state.username, this.state.dateOfBirth, this.state.password, this.state.passwordConfirmation)
        .then(data => {
            if (data.error) throw Error(data.error)
            this.props.signIn(data)
            this.props.history.push('/home') 
            }).catch(error => alert(error)) //change alert to a nicer notification

            this.setState(initialState)
        }
        
    }

    render(){
        return(
            <>
                <div className='errors'>
                    <p>{this.state.usernameErrors}</p>
                    <p>{this.state.dateOfBirthErrors}</p>
                    <p>{this.state.passwordErrors}</p>
                    <p>{this.state.passwordConfirmationErrors}</p>
                </div>


                <form className='sign-form' onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input className='input' onChange={this.handleChange} type='text' name='username' value={this.state.username}/>
                    <label>Date of Birth</label>
                    <input className='input' onChange={this.handleChange} type='date' name='dateOfBirth' value={this.state.dateOfBirth}/>
                    <label>Password</label>
                    <input className='input' onChange={this.handleChange} type='password' name='password' value={this.state.password}/>
                    <label>Password Confirmation</label>
                    <input className='input' onChange={this.handleChange} type='password' name='passwordConfirmation' value={this.passwordConfirmation}/>
                    <input class='button'type='submit'value='Sign Up'/>
                </form>
            </>
        )
    } 
}

export default SignUpForm