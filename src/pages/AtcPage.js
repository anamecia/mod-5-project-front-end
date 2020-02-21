import React, { Component } from 'react'
import Question from '../components/Question'
import questions from '../AtcQuestions.js'

class AtcPage extends Component{
    state={
        questionNumber:0,
        score:0
    }

    updateQuestionNumberAndScore = (e) => {
        this.setState({
            questionNumber: this.state.questionNumber += 1,
            score: this.state.score += parseInt(e.target.value)
        })
    }


    render(){
        const { questionNumber } = this.state 
        return(
            <div>
                {questionNumber===0 && <Question test={questions[0]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                {questionNumber===1 && <Question test={questions[1]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                {questionNumber===2 && <Question test={questions[2]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                {questionNumber===3 && <Question test={questions[3]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                {questionNumber===4 && <Question test={questions[4]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
            </div>
        )
    }
}

export default AtcPage

