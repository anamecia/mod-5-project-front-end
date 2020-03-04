import React, { Component } from 'react'
import Charts from '../components/Charts'
import API from '../API'
import AtcScore from '../components/AtcScore'
import { Link } from 'react-router-dom'

class Report extends Component {

    state = {
        userAtcs:[]
    }

    componentDidMount = () => {
        API.getUserAtcs()
        .then(data => this.setState({ userAtcs: data}))
    }

    userLastAtcs = () => {
        const { userAtcs } = this.state

        if (userAtcs.length !== 0){
            if(userAtcs.length <= 5)
                return userAtcs
            return userAtcs.slice(-6)
        } 
        return null   
    }

    render(){
        const lastAtcs = this.userLastAtcs()
        console.log(lastAtcs)
        return(
            <div className='report-container'>
                <p>Rescue Drugs usage</p>
                {this.props.user && <Charts/>}
                <p>Asthma Control Test Scores</p>
                { lastAtcs 
                ? lastAtcs.map( atc => <AtcScore atc={atc} key={atc.id}/>)
                : <div className='score-not-available'>
                    <p> No data available yet!</p>
                    <p> Take an Asthma Control Test <Link to='/atc'>Now </Link>!</p>
                </div>
                }
            </div>
        )
    }  
}

export default Report