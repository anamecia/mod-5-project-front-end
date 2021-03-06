import React, { Component } from 'react'
import API from '../API'

class PollenCount extends Component{

    state = {
        pollenCountInfo: null
        // pollenCountInfo: {
        //     "date": "2020-03-05",
        //     "index_id": "bpi",
        //     "index_display_name": "BreezoMeter Pollen Index",
        //     "types": {
        //         "grass": {
        //             "display_name": "Grass",
        //             "in_season": false,
        //             "data_available": false,
        //             "index": {
        //                 "value": null,
        //                 "category": null,
        //                 "color": null
        //             }
        //         },
        //         "tree": {
        //             "display_name": "Tree",
        //             "in_season": true,
        //             "data_available": true,
        //             "index": {
        //                 "value": 0,
        //                 "category": "None",
        //                 "color": null
        //             }
        //         },
        //         "weed": {
        //             "display_name": "Weed",
        //             "in_season": false,
        //             "data_available": false,
        //             "index": {
        //                 "value": null,
        //                 "category": null,
        //                 "color": null
        //             }
        //         }
        //     },
        //     "plants": {
        //         "olive": {
        //             "display_name": "Olive",
        //             "in_season": false,
        //             "data_available": false,
        //             "index": {
        //                 "value": null,
        //                 "category": null,
        //                 "color": null
        //             }
        //         },
        //         "graminales": {
        //             "display_name": "Graminales",
        //             "in_season": false,
        //             "data_available": false,
        //             "index": {
        //                 "value": null,
        //                 "category": null,
        //                 "color": null
        //             }
        //         },
        //         "ragweed": {
        //             "display_name": "Ragweed",
        //             "in_season": false,
        //             "data_available": false,
        //             "index": {
        //                 "value": null,
        //                 "category": null,
        //                 "color": null
        //             }
        //         },
        //         "birch": {
        //             "display_name": "Birch",
        //             "in_season": true,
        //             "data_available": true,
        //             "index": {
        //                 "value": 0,
        //                 "category": "None",
        //                 "color": null
        //             }
        //         }
        //     }
        // }
    }


    componentDidMount = () => {
        API.getPollenCount(this.props.latitude, this.props.longitude, process.env.REACT_APP_BREEZO_KEY)
        .then(pollenCountData => {
            if(pollenCountData.data[0])
                this.setState({pollenCountInfo: pollenCountData.data[0]})
            if(!pollenCountData.data[0])
                API.getPollenCountBin()
                .then(pollenCountData => this.setState({pollenCountInfo: pollenCountData.data[0]}))
        })
    }

    grassValue = () => {
        if(this.state.pollenCountInfo){
            if(!this.state.pollenCountInfo.types.grass.in_season)
                return null
            if (this.state.pollenCountInfo.types.grass.index.value === 0)
                return 0
            if (this.state.pollenCountInfo.types.grass.index.value === 1)
                return 1
            if (this.state.pollenCountInfo.types.grass.index.value === 2)
                return 2
            if (this.state.pollenCountInfo.types.grass.index.value === 3)
                return 3
            if(!this.state.pollenCountInfo.types.grass.index.value === 4)
                return 4
        }
    }

    treeValue = () => {
        if(this.state.pollenCountInfo){
            if(!this.state.pollenCountInfo.types.tree.in_season)
                return null
            if (this.state.pollenCountInfo.types.tree.index.value === 0)
                return 0
            if (this.state.pollenCountInfo.types.tree.index.value === 1)
                return 1
            if (this.state.pollenCountInfo.types.tree.index.value === 2)
                return 2
            if (this.state.pollenCountInfo.types.tree.index.value === 3)
                return 3
            if(!this.state.pollenCountInfo.types.tree.index.value === 4)
                return 4
        }           
    }

    graminalesValue = () => {
            if(this.state.pollenCountInfo){
                if(!this.state.pollenCountInfo.plants.graminales.in_season)
                    return null
                if (this.state.pollenCountInfo.plants.graminales.index.value === 0)
                    return 0
                if (this.state.pollenCountInfo.plants.graminales.index.value === 1)
                    return 1
                if (this.state.pollenCountInfo.plants.graminales.index.value === 2)
                    return 2
                if (this.state.pollenCountInfo.plants.graminales.index.value === 3)
                    return 3
                if(!this.state.pollenCountInfo.plants.graminales.index.value === 4)
                    return 4 
            }
                      
    }

    ragweedValue = () => {
        if(this.state.pollenCountInfo){
        if(!this.state.pollenCountInfo.plants.ragweed.in_season)
            return null
        if (this.state.pollenCountInfo.plants.ragweed.index.value === 0)
            return 0
        if (this.state.pollenCountInfo.plants.ragweed.index.value === 1)
            return 1
        if (this.state.pollenCountInfo.plants.ragweed.index.value === 2)
            return 2
        if (this.state.pollenCountInfo.plants.ragweed.index.value === 3)
            return 3
        if(!this.state.pollenCountInfo.plants.ragweed.index.value === 4)
            return 4
        }
           
    }


    render(){
        const firstSpan = {background:this.grassValue() === 1 ? 'white' : 'rgba(191, 190, 186, 0.5)'}

        return(
            <div className='pollen-count-container'>
                <p>Pollen Count</p>
                <div className='pollen-count-subcontainer'>
                    <div className='plant-container'>
                       <p>Grass</p>
                       <div>
                        <span style={{background:this.grassValue() === 0 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                        <span style={{background:this.grassValue() === 1 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                        <span style={{background:this.grassValue() === 2 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                        <span style={{background:this.grassValue() === 3 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                        <span style={{background:this.grassValue() === 4 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                       </div>
                    </div>
                    <div className='plant-container'>
                       <p>Tree</p>
                       <div>
                        <span style={{background:this.treeValue() === 0 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                        <span style={{background:this.treeValue() === 1 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                        <span style={{background:this.treeValue() === 2 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                        <span style={{background:this.treeValue() === 3 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                        <span style={{background:this.treeValue() === 4 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                       </div>
                    </div>
                    <div className='plant-container'>
                       <p>Graminales</p>
                       <div>
                            <span style={{background:this.graminalesValue() === 0 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                            <span style={{background:this.graminalesValue() === 1 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                            <span style={{background:this.graminalesValue() === 2 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                            <span style={{background:this.graminalesValue() === 3 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                            <span style={{background:this.graminalesValue() === 4 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                       </div>
                    </div>
                    <div className='plant-container'> 
                        <p>Ragweed</p>
                        <div>
                            <span style={{background:this.grassValue() === 0 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                            <span style={{background:this.grassValue() === 1 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                            <span style={{background:this.grassValue() === 2 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                            <span style={{background:this.grassValue() === 3 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                            <span style={{background:this.grassValue() === 4 ? 'white' : 'rgba(255, 255, 255, 0.3)'}}></span>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollenCount 