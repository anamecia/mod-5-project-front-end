import React from 'react'
import { Link } from 'react-router-dom'

const NarBar = ({ signOut }) => {
    return(
        <div>
            <Link to='/' onClick={signOut} >Sign Out</Link>
        </div>
    )
}

export default NarBar