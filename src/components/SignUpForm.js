import React, { Component } from 'react'

import API from '../API'
import { Link } from 'react-router-dom'
import Errors from '../containers/Errors';
var moment = require('moment');

class SignUpForm extends Component {
    state = {
        username: '',
        dateOfBirth: '',
        password: '',
        passwordConfirmation: '',
        signUpErrors: []
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
                this.props.history.push('/home') 
            }).catch(error => this.setState({signUpErrors: error.message.split(',')})) 
    }

    render(){
        return(
            <>
                <Errors errors={this.state.signUpErrors}/>
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

                <p>Already have an Open Air account? <Link to='/signin'>Sign in</Link></p>
            </>
        )
    } 
}

export default SignUpForm