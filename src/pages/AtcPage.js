import React, { Component } from 'react'
import data from '../AtcQuestions.js'

import Question from '../components/Question'
import API from '../API'
import AtcResult from '../components/AtcResult'


class AtcPage extends Component{
    state = {
        questionNumber:0,
        score:0
    }

    updateQuestionNumberAndScore = (e) => {
        this.setState({
            questionNumber: this.state.questionNumber += 1,
            score: this.state.score += parseInt(e.target.value)
        })

        if (this.state.questionNumber === 5){
            this.saveUserAtcScore()
        }
    }

    saveUserAtcScore = () => {
        const data = {asthma_control_test:
            {score: this.state.score}
        }
        API.createAtc(data)
    }


    render(){
        const { questionNumber } = this.state 
        return(
            <div id='atc-container'>
                {questionNumber===0 && <Question test={data.questions[0]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                {questionNumber===1 && <Question test={data.questions[1]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                {questionNumber===2 && <Question test={data.questions[2]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                {questionNumber===3 && <Question test={data.questions[3]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                {questionNumber===4 && <Question test={data.questions[4]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                {questionNumber===5 && <AtcResult score={this.state.score}/>}
            </div>
        )
    }
}

export default AtcPage

