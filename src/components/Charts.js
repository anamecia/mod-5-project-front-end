import React, { Component } from 'react';
import API from '../API';
import Chart from './Chart'

class  Charts extends Component {

    state = {
        rescueMedicines: []
    }

    componentDidMount = () => {
        API.getUserMedicines()
        .then ((userMedicines) => userMedicines.filter(medicine => medicine.rescue))
        .then (userRescueMedicines => this.setState({rescueMedicines: userRescueMedicines}))
    }

    render(){
        return(
            <div>
                {this.state.rescueMedicines && this.state.rescueMedicines.map(medicine => <Chart medicine={medicine} key={medicine.id}/>)}
            </div>
        )
    }
}

export default Charts