import React, { Component } from 'react'
import Charts from '../components/Charts'
import API from '../API'
import AtcScore from '../components/AtcScore'

class Report extends Component {

    state = {
        userAtcs:[]
    }

    componentDidMount = () => {
        // if(this.props.user === null) {
        //     this.props.history.push('/')
        // } else {
            API.getUserAtcs()
            .then(data => this.setState({ userAtcs: data}))
        }
    // }

    userLastAtcs = () => {
        const { userAtcs } = this.state

        if (userAtcs){
            if(userAtcs.length <= 5)
                return userAtcs
            return userAtcs.slice(-6)
        }
         
    }

    render(){
        const lastAtcs = this.userLastAtcs()
        return(
            <div className='report-container'>
                <p>Rescue Drugs usage</p>
                {this.props.user && <Charts/>}
                <p>Asthma Control Test Scores</p>
                {lastAtcs.map( atc => <AtcScore atc={atc} key={atc.id}/>)}
            </div>
        )
    }  
}

export default Report