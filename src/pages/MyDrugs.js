import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
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

    updateUserMedicines = (drug, updatedDrug) => {
        const index = this.state.userDrugs.indexOf(drug)
        const drugsArray = [... this.state.userDrugs]
        drugsArray.splice(index,1,updatedDrug)
        this.setState({
            userDrugs: drugsArray
        })
    }

    render(){
        const { user } = this.props
        const { medicineType } = this.state
        return(
            <div id='my-drugs-container'>
                <div>
                    {this.state.displaySearchForm && <SearchForm user={user} medicineType={medicineType} addNewMedicineToUserDrugs={this.addNewMedicineToUserDrugs}/>}
                </div>
                <div id='drugs-container'>
                    <p className='drug-type'>Rescue Drugs</p>
                    <RescueDrugs 
                        userRescueDrugs={this.userRescueDrugs()}
                        updateUserMedicines={this.updateUserMedicines}/>
                    <span onClick={() => this.handleClick({value:'rescue'})}> + </span>
                    <p className='drug-type'>Regular Drugs</p>
                    <RegularDrugs 
                        userRegularDrugs={this.userRegularDrugs()}
                        updateUserMedicines={this.updateUserMedicines}/>
                    <span onClick={() => this.handleClick({value:'regular'})}> + </span>
                </div>
            </div>
        )
    }  
}

export default MyDrugs 