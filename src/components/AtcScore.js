import React from 'react'
var moment = require('moment')


const AtcScore = ( { atc }) => {

    const resultColor = () => {
        if (atc.score === 25)
            return {color:'#57ad42'}
        if (atc.score <= 24 &&  atc.score >= 20)
            return {color:'#ffdb80'}
        if (atc.score < 20)
            return {color:'#ff7a70'}
    } 

    return(
        <div className='score-container'>
                <span>{moment(atc.created_at).format("Do MMM YYYY")}</span>
                <span style={resultColor()}><b>Score:{atc.score}</b></span>
        </div>
    )

}

export default AtcScore