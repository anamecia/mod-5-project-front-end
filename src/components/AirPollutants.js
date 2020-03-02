import React, { Component } from 'react'
import API from '../API'

class AirPollutants extends Component{

    state ={
        // airPollutantsInfo: null
        airPollutantsInfo:{
            "co": {
                "display_name": "CO",
                "full_name": "Carbon monoxide",
                "concentration": {
                    "value": 315.04,
                    "units": "ppb"
                },
                "sources_and_effects": {
                    "sources": "Typically originates from incomplete combustion of carbon fuels, such as that which occurs in car engines and power plants.",
                    "effects": "When inhaled, carbon monoxide can prevent the blood from carrying oxygen. Exposure may cause dizziness, nausea and headaches. Exposure to extreme concentrations can lead to loss of consciousness."
                }
            },
            "no2": {
                "display_name": "NO2",
                "full_name": "Nitrogen dioxide",
                "concentration": {
                    "value": 7.67,
                    "units": "ppb"
                },
                "sources_and_effects": {
                    "sources": "Main sources are fuel burning processes, such as those used in industry and transportation.",
                    "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD, and increased risk of respiratory infections, especially in young children."
                }
            },
            "o3": {
                "display_name": "O3",
                "full_name": "Ozone",
                "concentration": {
                    "value": 30.8,
                    "units": "ppb"
                },
                "sources_and_effects": {
                    "sources": "Ozone is created in a chemical reaction between atmospheric oxygen, nitrogen oxides, carbon monoxide and organic compounds, in the presence of sunlight.",
                    "effects": "Ozone can irritate the airways and cause coughing, a burning sensation, wheezing and shortness of breath. Additionally, ozone is one of the major components of photochemical smog."
                }
            },
            "pm10": {
                "display_name": "PM10",
                "full_name": "Inhalable particulate matter (<10µm)",
                "concentration": {
                    "value": 11.78,
                    "units": "ug/m3"
                },
                "sources_and_effects": {
                    "sources": "Main sources are combustion processes (e.g. indoor heating, wildfires), mechanical processes (e.g. construction, mineral dust, agriculture) and biological particles (e.g. pollen, bacteria, mold).",
                    "effects": "Inhalable particles can penetrate into the lungs. Short term exposure can cause irritation of the airways, coughing, and aggravation of heart and lung diseases, expressed as difficulty breathing, heart attacks and even premature death."
                }
            },
            "pm25": {
                "display_name": "PM2.5",
                "full_name": "Fine particulate matter (<2.5µm)",
                "concentration": {
                    "value": 6.75,
                    "units": "ug/m3"
                },
                "sources_and_effects": {
                    "sources": "Main sources are combustion processes (e.g. power plants, indoor heating, car exhausts, wildfires), mechanical processes (e.g. construction, mineral dust) and biological particles (e.g. bacteria, viruses).",
                    "effects": "Fine particles can penetrate into the lungs and bloodstream. Short term exposure can cause irritation of the airways, coughing and aggravation of heart and lung diseases, expressed as difficulty breathing, heart attacks and even premature death."
                }
            },
            "so2": {
                "display_name": "SO2",
                "full_name": "Sulfur dioxide",
                "concentration": {
                    "value": 0.99,
                    "units": "ppb"
                },
                "sources_and_effects": {
                    "sources": "Main sources are burning processes of sulfur-containing fuel in industry, transportation and power plants.",
                    "effects": "Exposure causes irritation of the respiratory tract, coughing and generates local inflammatory reactions. These in turn, may cause aggravation of lung diseases, even with short term exposure."
                }
            }
        }
    }

    componentDidMount = () => {
        // API.getAirPollutants(this.props.latitude, this.props.longitude, process.env.REACT_APP_BREEZO_KEY)
        // .then(airPollutantsData => this.setState({airPollutantsInfo: airPollutantsData.data.pollutants}))
        // add catch to handle errors
    }

    coValue = () => {
        if (this.state.airPollutantsInfo){
            const value = this.state.airPollutantsInfo.co.concentration.value
            if (value >= 0 && value <= 2000)
                return '#57ad42'
            if (value >= 2010 && value <= 9000)
                return '#ffdb80'
            if(value >= 9010 && value <= 15000)
            return '#ff7a70'
        }
        
    }

    no2Value = () => {
        if (this.state.airPollutantsInfo){
            const value = this.state.airPollutantsInfo.no2.concentration.value
            if (value >= 0 && value <= 30)
                return '#57ad42'
            if (value >= 31 && value <= 60)
            return '#ffdb80'
            if(value >= 61 && value <= 2000)
                return '#ff7a70'
        }
    }

    o3Value = () => {
        if (this.state.airPollutantsInfo){
            const value = this.state.airPollutantsInfo.o3.concentration.value
            if (value >= 0 && value <= 30)
                return '#57ad42'
            if (value >= 31 && value <= 90)
                return '#ffdb80'
            if(value >= 91 && value <= 600)
                return '#ff7a70'
        }
    }

    so2Value = () => {
        if (this.state.airPollutantsInfo){
            const value = this.state.airPollutantsInfo.so2.concentration.value
            if (value >= 0 && value <= 20)
                return '#57ad42'
            if (value >= 21 && value <= 50)
                return '#ffdb80'
            if(value >= 51 && value <= 100)
                return '#ff7a70'
        }
    }

    pm25Value = () => {
        if (this.state.airPollutantsInfo){
            const value = this.state.airPollutantsInfo.pm25.concentration.value
            if (value >= 0 && value <= 15)
                return '#57ad42'
            if (value >= 16 && value <= 50)
            return '#ffdb80'
            if(value >= 51 && value <= 500)
                return '#ff7a70'
        }
    }


    pm10Value = () => {
        if (this.state.airPollutantsInfo){
            const value = this.state.airPollutantsInfo.pm10.concentration.value
            if (value >= 0 && value <= 30)
                return '#57ad42'
            if (value >= 31 && value <= 80)
            return '#ffdb80'
            if(value >= 81 && value <= 600)
                return '#ff7a70'
        }
    }



    render(){
        const { airPollutantsInfo } = this.state
        const coColor = {background: this.coValue()}
        const no2Color = {background: this.no2Value()}
        const o3Color = {background: this.o3Value()}
        const so2Color = {background: this.so2Value()}
        const pm25Color = {background: this.pm25Value()}
        const pm10Color = {background: this.pm10Value()}

        return(
           
            <div className='air-pollutans-container'>
                <p>Air Pollutants</p>
                <div className='air-pollutans-subcontainer'>
                    <div>
                        <span style={coColor}></span>
                        <p>CO</p>
                        {/* {airPollutantsInfo && <p>{airPollutantsInfo.co.concentration.value} {airPollutantsInfo.co.concentration.units}</p>} */}
                    </div>
                    <div>
                        <span style={no2Color}></span>
                        <p>NO2</p>
                        {/* {airPollutantsInfo && <p>{airPollutantsInfo.no2.concentration.value} {airPollutantsInfo.no2.concentration.units}</p>} */}
                    </div>
                    <div>
                        <span style={o3Color}></span>
                        <p>O3</p>
                        {/* {airPollutantsInfo && <p>{airPollutantsInfo.o3.concentration.value} {airPollutantsInfo.o3.concentration.units}</p>} */}
                    </div>
                    <div>
                        <span style={so2Color}></span>
                        <p>SO2</p>
                        {/* {airPollutantsInfo && <p>{airPollutantsInfo.so2.concentration.value} {airPollutantsInfo.so2.concentration.units}</p>} */}
                    </div>
                    <div>
                        <span style={pm25Color}></span>
                        <p>PM2.5</p>
                        {/* {airPollutantsInfo &&<p>{airPollutantsInfo.pm25.concentration.value} {airPollutantsInfo.pm25.concentration.units}</p>} */}
                    </div>
                    <div>
                        <span style={pm10Color}></span>
                        <p>PM10</p>
                        {/* {airPollutantsInfo && <p>{airPollutantsInfo.pm10.concentration.value} {airPollutantsInfo.pm10.concentration.units}</p>} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default AirPollutants