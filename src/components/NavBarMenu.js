import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'


class  NavBarMenu extends Component{
    
    render(){
        const { signout, toggleShowMenu } = this.props
        return(
            <Menu right id='nav-bar-menu-container' width={ '40%' } noOverlay pageWrapId={ "page-wrap" }signout={signout}>
                <Link to='/home' onClick={toggleShowMenu}>Home</Link>
                <Link to='/mydrugs' onClick={toggleShowMenu}>My Drugs</Link>
                <Link to='/atc' onClick={toggleShowMenu}>Asthma Control Test</Link>
                <Link to='/notes' onClick={toggleShowMenu}>Notes</Link>
                <Link to='/report' onClick={toggleShowMenu}>Report</Link>
                <Link to='/' onClick={this.props.signout}> Sign Out</Link>
            </Menu>
        )
    }
}

export default NavBarMenu