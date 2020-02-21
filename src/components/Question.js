import React from 'react'
import AnswerButton from './AnswerButton'

const Question = ({ test, updateQuestionNumberAndScore }) => {

        return(
            <div>
               <p>{test.question}</p> 
               {test.answers.map(answer => 
               <button 
                    onClick={updateQuestionNumberAndScore}
                    key={answer.value} 
                    value={answer.value}
                    >
                    {answer.text}
                </button>
            )}
            </div>
        )
}

export default Question 