import React from 'react'

const NarBar = ({ signOut }) => {
    return(
        <div id='nav-bar'>
            <p id='title'>Open Air</p>
            <p id='hamburger'> menu</p>
            {/* <Link to='/' onClick={signOut}>Sign Out</Link> */}
        </div>
    )
}

export default NarBar