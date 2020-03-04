import React from 'react'
import cloud from '../images/cloud.svg'
import sun from '../images/sun.svg'
import fog from '../images/fog.svg'
import heavyRain from '../images/heavyrain.svg'
import drizzle from '../images/drizzle.svg'
import snow from '../images/snow.svg'
import storm from '../images/storm.svg'
import windy from '../images/windy.svg'
import satellite from '../images/satellite.svg'

const WeatherImage = ({ weatherDescription }) => {

    const selectImage = () => {
        if (weatherDescription === 'Clear, cloudless sky' 
            || weatherDescription === 'Clear, few cirrus' 
            || weatherDescription === 'Clear with cirrus'
            || weatherDescription === 'Clear with few low clouds' 
            || weatherDescription === 'Clear with few low clouds and few cirrus'
            || weatherDescription === 'Clear with few low clouds and cirrus'
            || weatherDescription === 'Clear but hazy'
            || weatherDescription === 'Clear but hazy with few cirrus'
            || weatherDescription === 'Clear but hazy with cirrus')
            return sun
        if(weatherDescription === 'Partly cloudy'
            || weatherDescription === 'Partly cloudy and few cirrus'
            || weatherDescription === 'Partly cloudy and cirrus'
            || weatherDescription === 'Mixed with some thunderstorm clouds possible'
            || weatherDescription === 'Mixed with few cirrus with some thunderstorm clouds possible'
            || weatherDescription === 'Mixed with cirrus and some thunderstorm clouds possible')
            return cloud
        if(weatherDescription === 'Fog/low stratus clouds'
            ||weatherDescription === 'Fog/low stratus clouds with few cirrus'
            || weatherDescription === 'Fog/low stratus clouds with cirrus')
            return fog
        if (weatherDescription === 'Mostly cloudy'
            || weatherDescription === 'Mostly cloudy and few cirrus'
            || weatherDescription === 'Mostly cloudy and cirrus'
            || weatherDescription === 'Overcast')
            return windy
        if (weatherDescription === 'Overcast with rain'
            || weatherDescription === 'Overcast with light rain'
            || weatherDescription === 'Mixed with showers')
            return drizzle
        if (weatherDescription === 'Overcast with heavy rain')
            return heavyRain
        if(weatherDescription === 'Overcast with snow'
            || weatherDescription === 'Overcast with heavy snow'
            || weatherDescription === 'Storm with heavy snow'
            || weatherDescription === 'Overcast with light snow'
            || weatherDescription === 'Overcast with mixture of snow and rain'
            || weatherDescription === 'Mixed with snow showers')
            return snow
        if(weatherDescription === 'Rain, thunderstorms likely'
            || weatherDescription === 'Light rain, thunderstorms likely'
            || weatherDescription === 'Heavy rain, thunderstorms likely')
            return storm

        return satellite
    }

    return(
        <>
            <img className='weather-image'src={selectImage()}/>
        </>
    )
}

export default WeatherImage

