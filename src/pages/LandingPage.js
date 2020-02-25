import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div id='landing-container'>
            <div id='sign-buttons-container'>
                <button className='sign-button'><Link to='/signin'>Sign in</Link></button>
                <button className='sign-button'><Link to='/signup'>Sign up</Link></button>
            </div>
        </div>
    )
}

export default LandingPage