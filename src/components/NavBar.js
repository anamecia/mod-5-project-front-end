import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBarMenu from './NavBarMenu'

class NarBar extends Component {

    state ={
        showMenu: false
    }

    toggleShowMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render(){
        const { user } = this.props
        return(
            <div id='nav-bar-container'>
                <div id='nav-bar'>
                    <Link to='/home' id='title'>Open Air</Link>
                    <i className="fa fa-bars" onClick={this.toggleShowMenu}></i>
                </div>
                {/* {this.state.showMenu && <NavBarMenu signout={this.props.signOut} toggleShowMenu={this.toggleShowMenu}/>} */}
            </div>
        )
    }  
}

export default NarBar