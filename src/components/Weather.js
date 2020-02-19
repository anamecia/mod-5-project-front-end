import React, { Component } from "react";
import API from '../API'


class Weather extends Component {

    state = {
        weatherInfo: null
    }

    componentDidMount = () => {
        API.getWeather(this.props.latitude, this.props.longitude, process.env.BREEZO_KEY)
        .then(weatherInfo => this.setState({weatherInfo: weatherInfo.data}))
    }

    render(){
        const { weatherInfo } = this.state 
        
        return (
            weatherInfo &&
             <div>
                <h3>{weatherInfo.weather_text}</h3>
                <h1>{weatherInfo.temperature.value}</h1>
                <p>Humidity</p>
                <p>{weatherInfo.relative_humidity}%</p>
                <p>Wind Speed</p>
                <p>{weatherInfo.wind.speed.value} km/h</p>
                <p>Precipitation</p>
                <p>{weatherInfo.precipitation.precipitation_probability}%</p>
            </div>
        )
    }
}

export default Weather 