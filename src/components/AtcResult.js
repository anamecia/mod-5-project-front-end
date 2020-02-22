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

    return(
        <div>
            <h1>{showResult().result}</h1>
            <p>{showResult().text}</p>
        </div>
    )
}

export default AtcResult


