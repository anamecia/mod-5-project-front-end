import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

import SignUpPage from './components/SignUpPage'
import SignInPage from './components/SignInPage'
import API from './API'


class App extends Component{
    state = {
        user: null
    }

    signIn = (data) => {
        this.setState({user: data.user})
        localStorage.token = data.token
    }

    componentDidMount = () => {
        if(localStorage.token){
            API.validate()
            .then(data => {
                if (data.error) throw Error(data.error)
                this.signIn(data)
                // this.props.history.push(null) //redirects the user to their page 
            }).catch(error => alert(error))  //change alert to a nicer notification    
        }
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

export default withRouter(App)