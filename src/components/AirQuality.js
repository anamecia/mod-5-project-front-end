import React, { Component } from 'react'
import API from '../API'

class AirQuality extends Component{

    state = {
        airQualityInfo: null
        // airQualityInfo: {
        //         "baqi": {
        //             "display_name": "BreezoMeter AQI",
        //             "aqi": 86,
        //             "aqi_display": "86",
        //             "color": "#3DB436",
        //             "category": "Excellent air quality",
        //             "dominant_pollutant": "o3"
        //         }
            
        // }
    }

    componentDidMount = () => {
        // API.getAirQuality(this.props.latitude, this.props.longitude, process.env.REACT_APP_BREEZO_KEY)
        // .then(airQualityData => {
        //     if(airQualityData.data.indexes.baqi) 
        //         this.setState({airQualityInfo: airQualityData.data.indexes.baqi})
        //     if(!airQualityData.data.indexes.baqi)
                API.getAirQualityBin()
                .then(airQualityData => this.setState({airQualityInfo: airQualityData.data.indexes.baqi}))      
        // })
    }
    

    airQualityDescription = () => {
        if(this.state.airQualityInfo){
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
    }

    airQualityColor = () => {
        if (this.state.airQualityInfo){
            const airQuality = this.state.airQualityInfo.aqi
        if (airQuality >= 0 &&  airQuality <= 50)
            return '#c8eba0' 
        if (airQuality >= 51 &&  airQuality <= 100)
            return '#ffdb80'
        if (airQuality >= 101 &&  airQuality <= 500)
            return '#ff7a70'
        } 
    }

    render(){
        const { airQualityInfo } = this.state
        const color ={color: this.airQualityColor()}
        return(
            <div className='air-quality-container'>
                <p>Air Quality</p>
                {airQualityInfo && <h1 style={color}>{this.airQualityDescription()}</h1>}
                {airQualityInfo && <p>{airQualityInfo.aqi} aqi</p>}
            </div>
        )
    }
}

export default AirQuality