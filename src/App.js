import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import API from './API'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import MyDrugs from './pages/MyDrugs'
import AtcPage from './pages/AtcPage'
import Notes from './pages/Notes'
import Report from './pages/ReportPage'
import NavBarMenu from './components/NavBarMenu'
import Brackdrop from './components/Backdrop'
import NotFoundPage from './pages/NotFoundPage'

class App extends Component{
    state = {
        user: null,
        showMenu: false,
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

    toggleShowMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    authorizedUser = () => localStorage.token ? true : false



    render(){
        const { user } = this.state
        return(
            <div id='main-container'>
                <NavBar user={user} toggleShowMenu={this.toggleShowMenu}/>
                {this.state.showMenu && <NavBarMenu signOut={this.signOut} toggleShowMenu={this.toggleShowMenu}/>}
                {this.state.showMenu && <Brackdrop toggleShowMenu={this.toggleShowMenu}/>}
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route path='/home' render={props => this.authorizedUser() ? <HomePage {...props} user={user}/> : <Redirect to='/'/>}/>
                    <Route path='/signup' render={props => !this.authorizedUser() ? <SignUpPage {...props} signIn={this.signIn}/> : <Redirect to='/home'/>}/>
                    <Route path='/signin' render={props => !this.authorizedUser() ? <SignInPage {...props} signIn={this.signIn}/> : <Redirect to='/home'/>}/>
                    <Route path='/mydrugs' render={ props => this.authorizedUser() ? <MyDrugs {...props} user={user}/> : <Redirect to='/'/>}/>
                    <Route path='/atc' render={props => this.authorizedUser() ? <AtcPage {...props} user={user}/> : <Redirect to='/'/>}/>
                    <Route path='/notes' render={props => this.authorizedUser() ? <Notes {...props} user={user}/> :  <Redirect to='/'/>}/> 
                    <Route path='/report' render={props => this.authorizedUser() ? <Report {...props} user={user}/> :  <Redirect to='/'/>}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        )
    } 
}

export default withRouter(App)