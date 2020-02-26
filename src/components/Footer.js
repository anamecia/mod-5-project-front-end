import React from 'react'
import { Link } from 'react-router-dom'
import inhaler from '../images/asthma.svg'
import test from '../images/test.svg'
import notebook from '../images/notebook.svg'
import chart from '../images/bar-chart.svg'




const Footer = () => {
    return(
        <div id='footer-container'>
             <div className='footer-subcontainer'>
                <Link to='/mydrugs'>
                    <div className='footer-option'>
                        <img src={inhaler} alt='inhaler'/>
                        <p>My Drugs</p>
                    </div>
                </Link>
            </div>
            <div className='footer-subcontainer'>
                <Link to='/atc'>
                    <div className='footer-option'>
                        <img src={test} alt='test'/>
                        <p>ATC</p>
                    </div>
                </Link>
            </div>
            <div className='footer-subcontainer'>
                <Link to='/notes'>
                    <div className='footer-option'>
                        <img src={notebook} alt='notebook'/>
                        <p>Notes</p>
                    </div>
                </Link>
            </div>
            <div className='footer-subcontainer'>
                <Link to='/report'>
                    <div className='footer-option'>
                        <img src={chart} alt='inhaler'/>
                        <p>Report</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Footer