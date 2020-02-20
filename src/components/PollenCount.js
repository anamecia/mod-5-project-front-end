import React, { Component } from 'react'
// import API from '../API'

class PollenCount extends Component{

    state = {
        pollenCountInfo: null
    }

    componentDidMount = () => {
        // API.getPollenCount(this.props.latitude, this.props.longitude, process.env.REACT_APP_BREEZO_KEY)
        // .then(pollenCountData => this.setState({pollenCountInfo: pollenCountData.data[0]}))
    }

    render(){
        return(
            <div>
                <p>Grass</p>
                <p>Tree</p>
                <p>Gramiales</p>
                <p>Ragweed</p>
            </div>
        )
    }
}

export default PollenCount 