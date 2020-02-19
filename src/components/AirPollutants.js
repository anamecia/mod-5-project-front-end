import React, { Component } from 'react'
import API from '../API'

class AirPollutants extends Component{

    state ={
        airPollutantsInfo: null
    }

    componentDidMount = () => {
        // API.getAirPollutants(this.props.latitude, this.props.longitude, process.env.REACT_APP_BREEZO_KEY)
        // .then(airPollutantsData => this.setState({airPollutantsInfo: airPollutantsData.data.pollutants}))
        // add catch to handle errors
    }

    render(){
        const { airPollutantsInfo } = this.state
        return(
            airPollutantsInfo &&
            <div>
                <p>Air Pollutants</p>
                <p>CO</p>
                <p>{airPollutantsInfo.co.concentration.value} {airPollutantsInfo.co.concentration.units}</p>
                <p>NO2</p>
                <p>{airPollutantsInfo.no2.concentration.value} {airPollutantsInfo.no2.concentration.units}</p>
                <p>O3</p>
                <p>{airPollutantsInfo.o3.concentration.value} {airPollutantsInfo.o3.concentration.units}</p>
                <p>SO2</p>
                <p>{airPollutantsInfo.so2.concentration.value} {airPollutantsInfo.so2.concentration.units}</p>
                <p>PM2.5</p>
                <p>{airPollutantsInfo.pm25.concentration.value} {airPollutantsInfo.pm25.concentration.units}</p>
                <p>PM10</p>
                <p>{airPollutantsInfo.pm10.concentration.value} {airPollutantsInfo.pm10.concentration.units}</p>
            </div>
        )
    }
}

export default AirPollutants