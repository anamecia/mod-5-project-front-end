import React, { Component } from "react";
import API from '../API'


class Weather extends Component {

    state = {
        // weather: null
        // weatherInfo: {
        //     "datetime": "2020-02-19T11:00:00Z",
        //     "is_day_time": true,
        //     "icon_code": 25,
        //     "weather_text": "Overcast with heavy rain",
        //     "temperature": {
        //         "value": 7.05,
        //         "units": "C"
        //     },
        //     "feels_like_temperature": {
        //         "value": 2.44,
        //         "units": "C"
        //     },
        //     "relative_humidity": 94,
        //     "precipitation": {
        //         "precipitation_probability": 26,
        //         "total_precipitation": {
        //             "value": 15.4,
        //             "units": "mm"
        //         }
        //     },
        //     "wind": {
        //         "speed": {
        //             "value": 18.756,
        //             "units": "km/h"
        //         },
        //         "direction": 249
        //     },
        //     "wind_gust": {
        //         "value": 30.6,
        //         "units": "km/h"
        //     },
        //     "pressure": {
        //         "value": 1012.68,
        //         "units": "mb"
        //     },
        //     "visibility": {
        //         "value": 9,
        //         "units": "km"
        //     },
        //     "dew_point": {
        //         "value": 6.14,
        //         "units": "C"
        //     },
        //     "cloud_cover": 90
        // }
    }

    componentDidMount = () => {
        // API.getWeather(this.props.latitude, this.props.longitude, process.env.REACT_APP_BREEZO_KEY)
        // .then(weatherInfo => this.setState({weatherInfo: weatherInfo.data}))
        //add catch to handle errors
    }

    render(){
        const { weatherInfo } = this.state 
        
        return (
             <div id='weather-container'>
                <div className='weather-subcontainer'>
                    <div className='weather-details'>
                        <span>image</span>
                    </div>
                    <div className='weather-details'>
                        {weatherInfo && <h3>{weatherInfo.weather_text}</h3>}
                        {weatherInfo && <h1>{Math.floor(weatherInfo.temperature.value)}°C</h1>}
                    </div>
                </div>
                <div className='weather-subcontainer'>
                    <div className='weather-details'>
                        <p name='title'>Humidity</p>
                        {weatherInfo && <p>{weatherInfo.relative_humidity}%</p>}
                    </div>
                    <div className='weather-details'>
                        <p name='title'>Wind Speed</p>
                        {weatherInfo && <p>{weatherInfo.wind.speed.value} km/h</p>}
                    </div>
                    <div className='weather-details'>
                        <p name='title'>Precipitation</p>
                        {weatherInfo && <p>{weatherInfo.precipitation.precipitation_probability}%</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather 