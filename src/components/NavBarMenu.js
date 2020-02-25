import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const NavBarMenu = ({ signOut, toggleShowMenu }) =>{

    const signOutAndCloseMenu = () => {
        signOut()
        toggleShowMenu()
    }
   
    return (
        <div className='navbar-menu-container' onClick={toggleShowMenu}>
            <Link to='/home' >Home</Link>
            <Link to='/mydrugs' >My Drugs</Link>
            <Link to='/atc' >Asthma Control Test</Link>
            <Link to='/notes' >Notes</Link>
            <Link to='/report' >Report</Link>
            <Link to='/' onClick={signOutAndCloseMenu}> Sign Out</Link>
        </div>
    )
    
}

export default NavBarMenu