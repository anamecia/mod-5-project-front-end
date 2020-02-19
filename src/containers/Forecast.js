import React from 'react'
import Weather from '../components/Weather'
import AirQuality from '../components/AirQuality'

const Forecast = ({latitude, longitude}) => {

    return(
        <div>
            <Weather latitude={latitude} longitude={longitude}/> 
            <AirQuality latitude={latitude} longitude={longitude}/>
        </div>
    )
}

export default Forecast