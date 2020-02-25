import React from 'react'
var moment = require('moment')


const AtcScore = ( { atc }) => {

    return(
        <div className='score-container'>
            <span>{moment(atc.created_at).format("Do MMM YYYY")}</span>
            <span>Score:{atc.score}</span >
        </div>
    )

}

export default AtcScore