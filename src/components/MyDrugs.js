import React, { Component } from 'react'
import SearchForm from './SearchForm'
import RescueDrugs from '../containers/RescueDrugsContainer'
import RegularDrugs from '../containers/RegularDrugsContainer'
import API from '../API'

class MyDrugs extends Component {

    state = {
        displaySearchForm: false,
        userDrugs:[],
        medicineType: ''
    }

    handleClick = (type) => {
        this.setState({
            displaySearchForm: !this.state.displaySearchForm,
            medicineType: type.value
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

    addNewMedicineToUserDrugs = (newMedicine) => {
        this.setState({userDrugs: [...this.state.userDrugs, newMedicine]})
    }

    render(){
        const { user } = this.props
        const { medicineType } = this.state
        return(
            <div>
            {this.state.displaySearchForm && <SearchForm user={user} medicineType={medicineType} addNewMedicineToUserDrugs={this.addNewMedicineToUserDrugs}/>}
                <div id='my-drugs-container'>
                    <p>Rescue Drugs</p>
                    <RescueDrugs userRescueDrugs={this.userRescueDrugs()}/>
                    <span onClick={() => this.handleClick({value:'rescue'})}> + </span>
                    <p>Regular Drugs</p>
                    <RegularDrugs userRegularDrugs={this.userRegularDrugs()}/>
                    <span onClick={() => this.handleClick({value:'regular'})}> + </span>
                </div>
            </div>
        )
    }  
}

export default MyDrugs 