import React from 'react'

const Question = ({ test, updateQuestionNumberAndScore }) => {

        return(
            <>
                <div id='question-container'>
                    <p id='question'>{test.question}</p> 
                </div>
                <div id='options'>
                {test.answers.map(answer => 
                    <button 
                            onClick={updateQuestionNumberAndScore}
                            key={answer.value} 
                            value={answer.value}
                            className='option-btn'
                            >
                            {answer.text}
                        </button>
                    )}
                </div>
            </>
        )
}

export default Question 