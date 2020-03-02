import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';


class Chart extends Component{

    state = {
        data : {
                labels: this.props.medicine.taken_doses.map(taken_dose => taken_dose.date),
                datasets: [
                    {
                        label: `${this.props.medicine.medicine.brand_name} ${this.props.medicine.medicine.dosage}`,
                        backgroundColor: '#24C6DC',
                        data: this.props.medicine.taken_doses.map(taken_dose => taken_dose.count)
                    }
                    ]
                }
            }


    render(){
        if (this.props.medicine.taken_doses.length > 0)
        return(
            <div className='chart'>
                <Bar data={this.state.data}
                    options={
                        {responsive: true, 
                            scales: {
                                xAxes: [{
                                    barPercentage: 0.2
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