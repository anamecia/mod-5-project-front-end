import React, { Component } from 'react'
// import API from '../API'

class AirQuality extends Component{

    state = {
        airQualityInfo: {
            "display_name": "BreezoMeter AQI",
            "aqi": 76,
            "aqi_display": "76",
            "color": "#69C534",
            "category": "Good air quality",
            "dominant_pollutant": "o3"
        }
    }

    componentDidMount = () => {
        // API.getAirQuality(this.props.latitude, this.props.longitude, process.env.REACT_APP_BREEZO_KEY)
        // .then(airQualityData => this.setState({airQualityInfo: airQualityData.data.indexes.baqi}))
        // add catch to handle errors
    }

    checkAirQuality = () => {
        const airQuality = this.state.airQualityInfo.aqi
        if (airQuality >= 0 &&  airQuality <= 50)
            return 'Good' 
        if (airQuality >= 51 &&  airQuality <= 100)
            return 'Moderate'
        if (airQuality >= 101 &&  airQuality <= 150)
            return 'Unhealthy for Sensitive Group'
        if (airQuality >= 150 &&  airQuality <= 200)
            return 'Unhealthy'
        if (airQuality >= 201 &&  airQuality <= 300)
            return 'Very Unhealthy'
        if (airQuality >= 301 &&  airQuality <=500)
            return 'Hazardous'
    }

    render(){
        const { airQualityInfo } = this.state
        return(
            
            <div className='air-quality-container'>
                <p>Air Quality</p>
                {airQualityInfo && <h1>{this.checkAirQuality()}</h1>}
                {airQualityInfo && <p>{airQualityInfo.aqi} aqi</p>}
            </div>
        )
    }
}

export default AirQuality