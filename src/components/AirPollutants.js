import React, { Component } from 'react'
// import API from '../API'

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
           
            <div className='air-pollutans-container'>
                <p>Air Pollutants</p>
                <div className='air-pollutans-subcontainer'>
                    <div>
                        <p>CO</p>
                        {airPollutantsInfo && <p>{airPollutantsInfo.co.concentration.value} {airPollutantsInfo.co.concentration.units}</p>}
                    </div>
                    <div>
                        <p>NO2</p>
                        {airPollutantsInfo && <p>{airPollutantsInfo.no2.concentration.value} {airPollutantsInfo.no2.concentration.units}</p>}
                    </div>
                    <div>
                        <p>O3</p>
                        {airPollutantsInfo && <p>{airPollutantsInfo.o3.concentration.value} {airPollutantsInfo.o3.concentration.units}</p>}
                    </div>
                    <div>
                        <p>SO2</p>
                        {airPollutantsInfo && <p>{airPollutantsInfo.so2.concentration.value} {airPollutantsInfo.so2.concentration.units}</p>}
                    </div>
                    <div>
                        <p>PM2.5</p>
                        {airPollutantsInfo &&<p>{airPollutantsInfo.pm25.concentration.value} {airPollutantsInfo.pm25.concentration.units}</p>}
                    </div>
                    <div>
                        <p>PM10</p>
                        {airPollutantsInfo && <p>{airPollutantsInfo.pm10.concentration.value} {airPollutantsInfo.pm10.concentration.units}</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default AirPollutants