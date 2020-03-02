import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

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
import Modal from './components/Modal'

class App extends Component{
    state = {
        user: null,
        showMenu: false,
        showModal: false
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

    toggleShowModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render(){
        const { user } = this.state
        return(
            <div id='main-container'>
                <NavBar user={user} toggleShowMenu={this.toggleShowMenu}/>
                {this.state.showMenu && <NavBarMenu signOut={this.signOut} toggleShowMenu={this.toggleShowMenu}/>}
                {this.state.showMenu  && <Brackdrop toggleShowMenu={this.toggleShowMenu}/>}
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route path='/home' render={props => <HomePage {...props} user={user}/>}/>
                    <Route path='/signup' render={props => <SignUpPage {...props} signIn={this.signIn}/>}/>
                    <Route path='/signin' render={props => <SignInPage {...props} signIn={this.signIn}/>}/>
                    <Route path='/mydrugs' render={ props => <MyDrugs {...props} user={user} toggleShowModal={this.toggleShowModal}/>}/>
                    <Route path='/atc' render={props => <AtcPage {...props} user={user}/>}/>
                    <Route path='/notes' render={props => <Notes {...props} user={user}/>}/> 
                    <Route path='/report' render={props => <Report {...props} user={user}/>}/>
                    <Route component={prosp => <h1>404 - Page not found</h1>}/>
                </Switch>
            </div>
        )
    } 
}

export default withRouter(App)