import React from 'react'
import { Link } from 'react-router-dom'

const NarBar = ({ signOut }) => {
    return(
        <div id='nav-bar'>
            <Link to='/home' id='title'>Open Air</Link>
            <i className="fa fa-bars"></i>
            {/* <Link to='/' onClick={signOut}>Sign Out</Link> */}
        </div>
    )
}

export default NarBar