import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import SignUpPage from './components/SignUpPage'
import SignInPage from './components/SignInPage'


class App extends Component{
    state = {
        user: null
    }

    signIn = (user) => {
        this.setState({user: user})
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path='/signup' component={SignUpPage}/>
                    <Route path='/signin' component={props => <SignInPage {...props} signIn={this.signIn}/>}/>
                </Switch>
            </div>
        )
    } 
}

export default App