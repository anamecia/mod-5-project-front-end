import React, { Component } from 'react';
import API from '../API';
import Chart from './Chart'


class  Charts extends Component {

    state = {
        rescueMedicines: [],
        selectedOption: 'lastSevenDays'
    }

    componentDidMount = () => {
        API.getUserMedicines()
        .then ((userMedicines) => userMedicines.filter(medicine => medicine.rescue))
        .then (userRescueMedicines => this.setState({rescueMedicines: userRescueMedicines}))
    }

    handleChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        })
    }


    render(){
        return(
            <div>
                {/* <label>Last 7 Days</label>
                    <input type = "radio" value='lastSevenDays' checked={this.state.selectedOption === 'lastSevenDays'} onChange={this.handleChange}/>
                    <input type = "radio" value='lastThirtyDays' checked={this.state.selectedOption === 'lastThirtyDays'} onChange={this.handleChange}/>
                <label>Last 30 Days</label> */}
                {this.state.rescueMedicines && this.state.rescueMedicines.map(medicine => <Chart medicine={medicine} key={medicine.id} selectedOption={this.state.selectedOption}/>)}
            </div>
        )
    }
}

export default Charts