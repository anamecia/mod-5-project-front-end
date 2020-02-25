import React from 'react'
import { Link } from 'react-router-dom'
import Inhaler from '../images/asthma.svg'

const Footer = () => {
    return(
        <div id='footer'>
            <Link to='/mydrugs'>My Drugs</Link>
            <Link to='/atc'>ATC</Link>
            {/* <Link to='/home'>Home</Link> */}
            <Link to='/notes'>Notes</Link>
            <Link to='/report'>Report</Link>
        </div>
    )
}

export default Footer