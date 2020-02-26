import React, { Component } from 'react'
// import API from '../API'

class PollenCount extends Component{

    state = {
        // pollenCountInfo: null
        pollenCountInfo: {
            "date": "2020-02-25",
            "index_id": "bpi",
            "index_display_name": "BreezoMeter Pollen Index",
            "types": {
                "grass": {
                    "display_name": "Grass",
                    "in_season": false,
                    "data_available": false,
                    "index": {
                        "value": null,
                        "category": null,
                        "color": null
                    }
                },
                "tree": {
                    "display_name": "Tree",
                    "in_season": false,
                    "data_available": false,
                    "index": {
                        "value": null,
                        "category": null,
                        "color": null
                    }
                },
                "weed": {
                    "display_name": "Weed",
                    "in_season": false,
                    "data_available": false,
                    "index": {
                        "value": null,
                        "category": null,
                        "color": null
                    }
                }
            },
            "plants": {
                "olive": {
                    "display_name": "Olive",
                    "in_season": false,
                    "data_available": false,
                    "index": {
                        "value": null,
                        "category": null,
                        "color": null
                    }
                },
                "graminales": {
                    "display_name": "Graminales",
                    "in_season": false,
                    "data_available": false,
                    "index": {
                        "value": null,
                        "category": null,
                        "color": null
                    }
                },
                "ragweed": {
                    "display_name": "Ragweed",
                    "in_season": false,
                    "data_available": false,
                    "index": {
                        "value": null,
                        "category": null,
                        "color": null
                    }
                },
                "birch": {
                    "display_name": "Birch",
                    "in_season": false,
                    "data_available": false,
                    "index": {
                        "value": null,
                        "category": null,
                        "color": null
                    }
                }
            }
        }
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
            if(!this.state.pollenCountInfo.types.tree.in_season)
                return 'green'
    }

    gramialesValue = () => {
            if(this.state.pollenCountInfo)
                if(!this.state.pollenCountInfo.types.gramiales.in_season)
                    return 'green'
    }

    ragweedValue = () => {
        if(this.state.pollenCountInfo)
            if(!this.state.pollenCountInfo.types.ragweed.in_season)
                return 'green'
    }


    render(){
        const grassColor = {background:this.grassValue()}
        const treeColor = {background:this.treeValue()}
        const gramialesColor = {background:this.grassValue()}
        const ragweedColor = {background:this.grassValue()}

        return(
            <div className='pollen-count-container'>
                <p>Pollen Count</p>
                <div className='pollen-count-subcontainer'>
                    <div className='plant-container'>
                       <p>Grass</p><span style={grassColor}></span>
                    </div>
                    <div className='plant-container'>
                       <p>Tree</p><span style={treeColor}></span>
                    </div>
                    <div className='plant-container'>
                       <p>Gramiales</p><span style={gramialesColor}></span>
                    </div>
                    <div className='plant-container'> 
                        <p>Ragweed</p><span style={ragweedColor}></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollenCount 