import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';


class Chart extends Component{

    state = {
        data : {
                labels: this.props.medicine.taken_doses.map(taken_dose => taken_dose.date),
                datasets: [
                    {
                        label: `Number of ${this.props.medicine.medicine.brand_name} ${this.props.medicine.medicine.dosage} doses per day`,
                        backgroundColor: 'blue',
                        data: this.props.medicine.taken_doses.map(taken_dose => taken_dose.count)
                    }
                    ]
                }

    }

    getChartData = () => {
        const data = this.state.data
        if(data.datasets){

        }

        return data
    }

    render(){
        return(
            <Bar data={this.getChartData} options={{responsive: true, scales: {yAxes: [{ticks: { beginAtZero: true}}]}}}/>
        )
    }
}

export default Chart