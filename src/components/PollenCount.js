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
            <div className='pollen-count-container'>
                <p>Pollen Count</p>
                <div className='pollen-count-subcontainer'>
                    <div>
                        <p>Grass</p>
                    </div>
                    <div>
                        <p>Tree</p>
                    </div>
                    <div>
                        <p>Gramiales</p>
                    </div>
                    <div>
                        <p>Ragweed</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollenCount 