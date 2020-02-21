import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import API from './API'
import HomePage from './pages/HomePage'
import MyDrugs from './pages/MyDrugs'
import AtcPage from './pages/AtcPage'

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
                    <Route exact path='/home' component={HomePage}/>
                    <Route path='/signup' render={props => <SignUpPage {...props} signIn={this.signIn}/>}/>
                    <Route path='/signin' render={props => <SignInPage {...props} signIn={this.signIn}/>}/>
                    <Route path='/mydrugs' render={ props => <MyDrugs {...props} user={this.state.user}/>}/>
                    <Route path='/atc' component={AtcPage}/>
                </Switch>
            </div>
        )
    } 
}

export default withRouter(App)