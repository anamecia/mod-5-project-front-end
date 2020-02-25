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
            this.props.history.push('/home') 
            }).catch(error => alert(error)) //change alert to a nicer notification
    }

    render(){
        return(
            <>
                <form className='sign-form' onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input className='input' onChange={this.handleChange} type='text' name='username'/>
                    <label>Date of Birth</label>
                    <input className='input' onChange={this.handleChange} type='date' name='dateOfBirth'/>
                    <label>Password</label>
                    <input className='input' onChange={this.handleChange} type='password' name='password'/>
                    <label>Password Confirmation</label>
                    <input className='input' onChange={this.handleChange} type='password' name='passwordConfirmation'/>
                    <input class='button'type='submit'value='Sign Up'/>
                </form>
            </>
        )
    } 
}

export default SignUpForm