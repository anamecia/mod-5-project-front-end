import React, { Component } from 'react'
import data from '../AtcQuestions.js'

import Question from '../components/Question'
import API from '../API'
import AtcResult from '../components/AtcResult'
import AtcNotAllowed from '../components/AtcNotAllowed'
import StartAtc from '../components/StartAtc'
import Loader from '../components/Loader'
var moment = require('moment');



class AtcPage extends Component{
    state = {
        questionNumber: null,
        score: 0,
        nextAtcDate: null
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

    startAtc = () => {
        this.setState({questionNumber: 0})
    }

    componentDidMount = () => {
        API.getLastAtc()
        .then((data) => this.setState({ 
            nextAtcDate: moment(data.created_at).add(28, 'days')._d }))
    }

    render(){
        const { questionNumber, nextAtcDate } = this.state 
        const status = () => new Date() >= this.state.nextAtcDate 
        return(
            <div className='atc-container'>
                {!this.state.nextAtcDate && <Loader />}
                {!status() && <AtcNotAllowed nextAtcDate={nextAtcDate}/> }
                {status() &&
                <>
                    {this.state.questionNumber === null && <StartAtc startAtc={this.startAtc}/>}
                    <div id='atc-subcontainer'>
                        {questionNumber===0 && <Question number={questionNumber + 1} test={data.questions[0]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                        {questionNumber===1 && <Question number={questionNumber + 1} test={data.questions[1]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                        {questionNumber===2 && <Question number={questionNumber + 1} test={data.questions[2]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                        {questionNumber===3 && <Question number={questionNumber + 1} test={data.questions[3]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                        {questionNumber===4 && <Question number={questionNumber + 1} test={data.questions[4]} updateQuestionNumberAndScore={this.updateQuestionNumberAndScore}/>}
                        {questionNumber===5 && <AtcResult score={this.state.score}/>}
                    </div>
                </>}
            </div>
        )
    }
}

export default AtcPage

