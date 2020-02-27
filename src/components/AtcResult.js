import React from 'react'
import data from '../AtcQuestions.js'

const AtcResult = ({score}) => {

    const showResult = () => {
        if (score === 25)
            return data.results[0]
        if (score <= 24 &&  score >= 20)
            return data.results[1]
        if (score < 20)
            return data.results[2]
    } 

    const resultColor = () => {
        if (score === 25)
            return '#57ad42' 
        if (score <= 24 &&  score >= 20)
            return '#ffdb80'
        if (score < 20)
            return '#ff7a70'
    } 

    return(
        <div id='atc-result-container'>
            <div id='atc-result-card' style={{background: resultColor()}}>
                <h1 className='result-title'>{showResult().result}</h1>
                <p className='result'>Score: {score}</p>
                <p className='result'>{showResult().text}</p>
            </div>
        </div>
    )
}

export default AtcResult


