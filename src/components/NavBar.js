import React from 'react'
import { Link } from 'react-router-dom'

const NarBar = ({user , toggleShowMenu}) => {
       
        return(
            <div id='nav-bar-container'>
                <div id='nav-bar'>
                    <Link to='/home' id='title'>Open Air</Link>
                    <i className="fa fa-bars" onClick={toggleShowMenu}></i>
                </div>
            </div>
        )
}

export default NarBar