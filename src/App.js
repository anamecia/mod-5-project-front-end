import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import SignUpPage from './components/SignUpPage'
import SignInPage from './components/SignInPage'
import API from './API'
import HomePage from './components/HomePage'
import MyDrugs from './components/MyDrugs'

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
            }).catch(error => alert(error))  //change alert to a nicer notification    
        }
    }

    render(){
        return(
            <div id='main-container'>
                <NavBar signOut={this.signOut}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/signup' component={props => <SignUpPage {...props} signIn={this.signIn}/>}/>
                    <Route path='/signin' component={props => <SignInPage {...props} signIn={this.signIn}/>}/>
                    <Route path='/mydrugs' component={ props => <MyDrugs {...props} user={this.state.user}/>}/>
                </Switch>
            </div>
        )
    } 
}

export default withRouter(App)