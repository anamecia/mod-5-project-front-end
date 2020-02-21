import React from 'react'


const AnwerButton = ({ answer, updateQuestionNumberAndScore}) => {
    return(
        <button value={answer.value} onClick={updateQuestionNumberAndScore}>{answer.text}</button>
    )
}

export default AnwerButton