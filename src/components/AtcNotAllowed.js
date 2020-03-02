import React from 'react'
import { Link } from 'react-router-dom'
var moment = require('moment');

const AtcNotAllowed = ({ nextAtcDate}) => {
    const remainingDay = moment(nextAtcDate).toNow(true)
    return(
        <div className='atc-not-allowed-container'>
            <h3>You've completed the last Asthma Control Test  in less than a month!</h3>
            <h1>Your next test in due in <span>{remainingDay}</span></h1>
            <Link to='/home'>Back</Link>
        </div>
    )
}

export default AtcNotAllowed