import React from 'react'
import Weather from '../components/Weather'
import AirQuality from '../components/AirQuality'
import AirPollutants from '../components/AirPollutants'

const Forecast = ({latitude, longitude}) => {

    return(
        <div>
            <Weather latitude={latitude} longitude={longitude}/> 
            <AirQuality latitude={latitude} longitude={longitude}/>
            <AirPollutants latitude={latitude} longitude={longitude}/>
        </div>
    )
}

export default Forecast