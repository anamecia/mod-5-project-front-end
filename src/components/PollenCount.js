import React, { Component } from 'react'
import API from '../API'

class PollenCount extends Component{

    state = {
        pollenCountInfo: null
    }

    componentDidMount = () => {
        // API.getPollenCount(this.props.latitude, this.props.longitude, process.env.REACT_APP_BREEZO_KEY)
        // .then(pollenCountData => this.setState({pollenCountInfo: pollenCountData.data[0]}))
    }

    grassValue = () => {
        if(this.state.pollenCountInfo)
            if(!this.state.pollenCountInfo.types.grass.in_season)
                return 'green'
    }

    treeValue = () => {
        if(this.state.pollenCountInfo)
            if(!this.state.pollenCountInfo.types.grass.in_season)
                return 'green'
    }

    gramialesValue = () => {
            if(this.state.pollenCountInfo)
                if(!this.state.pollenCountInfo.types.grass.in_season)
                    return 'green'
    }

    ragweedValue = () => {
        if(this.state.pollenCountInfo)
            if(!this.state.pollenCountInfo.types.grass.in_season)
                return 'green'
    }


    render(){
        const grassColor = {color:this.grassValue()}
        const treeColor = {color:this.treeValue()}
        const gramialesColor = {color:this.grassValue()}
        const ragweedColor = {color:this.grassValue()}

        return(
            <div className='pollen-count-container'>
                <p>Pollen Count</p>
                <div className='pollen-count-subcontainer'>
                    <div>
                        <p style={grassColor}>Grass</p>
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