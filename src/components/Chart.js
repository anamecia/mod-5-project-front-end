import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
var moment = require('moment');



class Chart extends Component{

    state = {
        data : {
                labels: this.props.medicine.taken_doses.map(taken_dose => taken_dose.date),
                datasets: [
                    {
                        label: `${this.props.medicine.medicine.brand_name} ${this.props.medicine.medicine.dosage}`,
                        backgroundColor: '#c8e5e6',
                        data: this.props.medicine.taken_doses.map(taken_dose => taken_dose.count)
                    }
                    ]
                }
            }

    selectedData = () => {
        const periodOfTime = this.props.selectedOption === 'lastSevenDays' ? 7 : 30
        console.log(periodOfTime)
        const limit = moment().subtract(periodOfTime, 'days')._d
        const takenDoses = this.props.medicine.taken_doses.map(takenDose => takenDose)
        const takenDosesOnSelectedPeriod = takenDoses.filter(takenDose => moment(takenDose.created_at) >= limit ) 
        console.log(limit)
        console.log(takenDosesOnSelectedPeriod)
    }

    render(){
        if (this.props.medicine.taken_doses.length > 0)
        {this.selectedData()}

        return(
            <div className='chart'>
                <Bar data={this.state.data}
                    options={
                        {responsive: true, 
                            scales: {
                                xAxes: [{
                                    barPercentage: 0.3
                                }],
                                yAxes: [
                                    {ticks: 
                                        { 
                                            beginAtZero: true, 
                                            stepSize: 1, 
                                            scaleLabel: {
                                                display: true, 
                                                labelString: 'number of doses'
                                            }
                                        }
                                    }],
                                 }

                        }
                    }
                />
            </div>
        )
        return null
    }
}

export default Chart