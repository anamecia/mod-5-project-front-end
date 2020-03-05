import React from 'react'
import { Link } from 'react-router-dom'
import forest from '../images/forest.svg'

const LandingPage = () => {
    return (
        <div id='landing-container'>
            
            <div id='landing-content-container'>
                <div id='slogan-container'>
                    <p>Enjoy life outside by managing <br/> your <b>Asthma</b> with Open Air </p>
                </div>
                <div id='sign-btn-container'>
                    <button><Link to='/signin'>Sign in</Link></button>
                    <button><Link to='/signup'>Sign up</Link></button>
                </div>
                <div className='background-image'></div>
            </div>
            
        </div>
    )
}

export default LandingPage