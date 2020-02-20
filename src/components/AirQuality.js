import React, { Component } from 'react'
// import API from '../API'

class AirQuality extends Component{

    state = {
        airQualityInfo: null
    }

    componentDidMount = () => {
        // API.getAirQuality(this.props.latitude, this.props.longitude, process.env.REACT_APP_BREEZO_KEY)
        // .then(airQualityData => this.setState({airQualityInfo: airQualityData.data.indexes.baqi}))
        // add catch to handle errors
    }

    render(){
        const { airQualityInfo } = this.state
        return(
            airQualityInfo &&
            <div>
                <p>Air Quality</p>
                <h1>{airQualityInfo.category}</h1>
                <p>{airQualityInfo.aqi} aqi</p>
            </div>
        )
    }
}

export default AirQuality