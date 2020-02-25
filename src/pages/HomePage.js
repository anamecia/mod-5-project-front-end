import React, { Component } from 'react'
import Forecast from '../containers/Forecast'
import Footer from '../components/Footer'


class HomePage extends Component{
    state = {
        latitude: null,
        longitude: null,
    }

    checkBrowserGeolocation = () => {
        "geolocation" in navigator 
            ? this.getCoordinates()
            :alert("Sorry, we can't find your location") //change to a nicer notification
    }

    getCoordinates = () => {
        navigator.geolocation.getCurrentPosition(this.coordsSuccess, this.coordsError)
    }

    coordsSuccess = (position) => {
        this.setState({
            latitude:position.coords.latitude, 
            longitude:position.coords.longitude});
    }

    coordsError = (error) => {
        alert(error.message)
    }

    componentDidMount(){
         this.checkBrowserGeolocation()
    }

    render(){
        const {latitude, longitude} = this.state
        return(
            <div id='home-container'>
                {latitude && <Forecast latitude={latitude} longitude={longitude}/>}  
                <Footer/>
            </div>
        )
    }

}

export default HomePage