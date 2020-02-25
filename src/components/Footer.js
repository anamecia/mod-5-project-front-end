import React from 'react'
import { Link } from 'react-router-dom'
import Inhaler from '../images/asthma.svg'

const Footer = () => {
    return(
        <div id='footer'>
            <Link to='/mydrugs'><img className='footer-icon' src={Inhaler}/></Link>
            <Link to='/atc'>Atc</Link>
            <Link to='/home'>Home</Link>
            <Link to='/notes'>Notes</Link>
            <Link to='/reports'>report</Link>
        </div>
    )
}

export default Footer