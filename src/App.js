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
        const { user } = this.props
        return(
            <div id='main-container'>
                <NavBar user={user} toggleShowMenu={this.toggleShowMenu}/>
                {this.state.showMenu && <NavBarMenu signOut={this.signOut} toggleShowMenu={this.toggleShowMenu}/>}
                {this.state.showMenu  && <Brackdrop/>}
                {this.state.showModal && <Brackdrop/>}
                {this.state.showModal && <Modal/>}
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/signup' render={props => <SignUpPage {...props} signIn={this.signIn}/>}/>
                    <Route path='/signin' render={props => <SignInPage {...props} signIn={this.signIn}/>}/>
                    <Route path='/mydrugs' render={ props => <MyDrugs {...props} user={user} toggleShowModal={this.toggleShowModal}/>}/>
                    <Route path='/atc' component={AtcPage}/>
                    <Route path='/notes' component={Notes}/> 
                    <Route path='/report' component={Report}/>
                </Switch>
            </div>
        )
    } 
}

export default withRouter(App)