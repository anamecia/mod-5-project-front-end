import React, { Component } from 'react'

import API from '../API'

const initialState= {
    username: '',
    password: '',
    usernameErrors: '',
    passwordErrors:'',
    loginError: ''
}

class SignInForm  extends Component {
    state = {
        username: '',
        password: '',
        usernameErrors: '',
        passwordErrors:'',
        loginError: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    validate = () => {
        let usernameErrors = ''
        let passwordErrors = ''

        if (!this.state.username)
            usernameErrors = 'Username is required'

        if (!this.state.password)
            passwordErrors = 'Password is required'
        if (usernameErrors || passwordErrors){
            this.setState({usernameErrors, passwordErrors})
            return false
        }

        return true 
    }

    handleSubmit = (e) =>{
        e.preventDefault()
         
       if(this.validate()){
            API.signIn(this.state.username, this.state.password)
            .then(data => {
                if (data.error) throw Error(data.error)
                this.props.signIn(data)
                this.props.history.push('/home') 
            }).catch(error => alert(error))  //change alert to a nicer notification
            
            this.setState(initialState)
        }

        
    }

    render(){
        return(
            <>
                <div>{this.state.usernameErrors}</div>
                <div>{this.state.passwordErrors}</div>
              
                <form className='sign-form'onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input className='input'onChange={this.handleChange} type='text' name='username' value={this.state.username}/>
                    <label>Password</label>
                    <input className='input' onChange={this.handleChange} type='password' name='password' value={this.state.password}/>
                    <input className='button' type='submit' value='Sign In'/>
                </form>

            </>
        )
    }
}

export default SignInForm