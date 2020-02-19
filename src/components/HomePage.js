import React, { Component } from 'react'

class HomePage extends Component{
    state = {
        latitude: null,
        longitude: null

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
        return(
            <div>
                <p>HomePage</p>
            </div>
        )
    }

}

export default HomePage