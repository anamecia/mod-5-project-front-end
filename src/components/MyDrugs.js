import React, { Component } from 'react'
import SearchForm from './SearchForm'
import RescueDrugs from '../containers/RescueDrugsContainer'
import RegularDrugs from '../containers/RegularDrugsContainer'
import API from '../API'

class MyDrugs extends Component {

    state = {
        displaySearchForm: false,
        userDrugs:[]
    }

    handleClick = () => {
        this.setState({
            displaySearchForm: true
        })
    }

    componentDidMount = () => {
        API.getUserMedicines()
        .then(data => this.setState({ userDrugs:data }))
    }

    userRescueDrugs = () => 
        this.state.userDrugs.filter(drug => drug.rescue)

    userRegularDrugs = () => 
        this.state.userDrugs.filter(drug => !drug.rescue)

    render(){
        return(
            <div>
            {this.state.displaySearchForm && <SearchForm/>}
                <div id='my-drugs-container'>
                    <p>Rescue Drugs</p>
                    <RescueDrugs userRescueDrugs={this.userRescueDrugs()}/>
                    <span onClick={this.handleClick}> + </span>
                    <p>Regular Drugs</p>
                    <RegularDrugs userRegularDrugs={this.userRegularDrugs()}/>
                    <span onClick={this.handleClick}> + </span>
                </div>
            </div>
        )
    }  
}

export default MyDrugs 