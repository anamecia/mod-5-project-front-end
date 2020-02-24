import React from 'react'
import Weather from '../components/Weather'
import AirQuality from '../components/AirQuality'
import AirPollutants from '../components/AirPollutants'
import PollenCount from '../components/PollenCount'

const Forecast = ({latitude, longitude}) => {

    return(
        <>
            <Weather latitude={latitude} longitude={longitude}/> 
            <AirQuality latitude={latitude} longitude={longitude}/>
            <AirPollutants latitude={latitude} longitude={longitude}/>
            <PollenCount latitude={latitude} longitude={longitude}/>
        </>
    )
}

export default Forecast