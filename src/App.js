import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

import NavBar from './components/NavBar'
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

    signOut = () =>{
        this.setState({user: null})
        localStorage.removeItem('token')
    }

    componentDidMount = () => {
        if(localStorage.token){
            API.validate()
            .then(data => {
                if (data.error) throw Error(data.error)
                this.signIn(data)
                this.props.history.push('/') //redirects the user to their page 
            }).catch(error => alert(error))  //change alert to a nicer notification    
        }
    }

    render(){
        return(
            <div>
                <NavBar signOut={this.signOut}/>
                <Switch>
                    <Route path='/signup' component={props => <SignUpPage {...props} signIn={this.signIn}/>}/>
                    <Route path='/signin' component={props => <SignInPage {...props} signIn={this.signIn}/>}/>
                </Switch>
            </div>
        )
    } 
}

export default withRouter(App)