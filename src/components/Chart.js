import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
var moment = require('moment');

class Chart extends Component{

    state = {
        data:{
            labels:[],
            datasets:[]
        },
        selectedOption: 'lastThirtyDays'
    }

   componentDidMount = () => {
        this.selectDate()
    }

    handleChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        },this.selectDate
        )
    }

    selectedData = (data) => {
        this.setState({
            data : {
                labels: data.map(taken_dose => taken_dose.date),
                datasets: [
                    {
                        label: `${this.props.medicine.medicine.brand_name}`,
                        backgroundColor: '#c8e5e6',
                        data: data.map(taken_dose => taken_dose.count)
                    }
                    ]
                }
            }
        )
    }

    selectDate = () => {
        const periodOfTime = this.state.selectedOption === 'lastSevenDays' ? 7 : 30
        const limit = moment().subtract(periodOfTime, 'days')._d
        const takenDoses = this.props.medicine.taken_doses.map(takenDose => takenDose)
        const data = takenDoses.filter(takenDose => moment(takenDose.created_at)._d >= limit)
        this.selectedData(data)
    }

    render(){
        if (this.props.medicine.taken_doses.length > 0)
        return(

            <div className='chart'>
                <div className='radio-btn-container'>
                <label>Last 7 Days</label>
                    <input id='' type = "radio" value='lastSevenDays' checked={this.state.selectedOption === 'lastSevenDays'} onChange={this.handleChange}/>
                    <input id='two' type = "radio" value='lastThirtyDays' checked={this.state.selectedOption === 'lastThirtyDays'} onChange={this.handleChange}/>
                <label>Last 30 Days</label>
                </div>
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