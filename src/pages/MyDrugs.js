import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import RescueDrugs from '../containers/RescueDrugsContainer'
import RegularDrugs from '../containers/RegularDrugsContainer'
import Backdrop from '../components/Backdrop'
import API from '../API'

class MyDrugs extends Component {

    state = {
        userDrugs:[],
        medicineType: ''
    }

    updateMedicineType = (type) => {
        this.setState({ medicineType: type.value })
    }

    closeSearchForm = () => {
        this.setState({ medicineType: '' })
    }
    

    componentDidMount = () => {
        // if(this.props.user === null) {
        //     this.props.history.push('/')
        // } else{
            API.getUserMedicines()
            .then(data => this.setState({ userDrugs:data }))
        // }  
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
        const drugsArray = [...this.state.userDrugs]
        drugsArray.splice(index,1,updatedDrug)
        this.setState({
            userDrugs: drugsArray
        })
    }

    deleteUseMedicine = (drugToRemove) => {
        this.setState({
            userDrugs: [...this.state.userDrugs].filter( drug => drug.id !== drugToRemove.id)
        })
    }

    render(){
        const { user, toggleShowModal } = this.props
        const { userDrugs, medicineType } = this.state
        return(
            <div id='my-drugs-container'>
                <div id='search-form-container'>
                    {medicineType && <SearchForm 
                        user={user}
                        medicineType={medicineType} 
                        userDrugs={userDrugs}
                        addNewMedicineToUserDrugs={this.addNewMedicineToUserDrugs}
                        closeSearchForm={this.closeSearchForm}/>}
                </div>
                    {medicineType && <Backdrop closeSearchForm={this.closeSearchForm}/>}
                <div id='drugs-container'>
                    <p className='drug-type'>Rescue Drugs</p>
                    <RescueDrugs 
                        userRescueDrugs={this.userRescueDrugs()}
                        deleteUseMedicine={this.deleteUseMedicine}
                        updateUserMedicines={this.updateUserMedicines}
                        toggleShowModal={toggleShowModal}/>
                    <button className='add-button' onClick={() => this.updateMedicineType({value:'rescue'})}> + </button>
                    <p className='drug-type'>Regular Drugs</p>
                    <RegularDrugs 
                        userRegularDrugs={this.userRegularDrugs()}
                        deleteUseMedicine={this.deleteUseMedicine}
                        updateUserMedicines={this.updateUserMedicines}
                        toggleShowModal={toggleShowModal}/>
                    <button className='add-button' onClick={() => this.updateMedicineType({value:'regular'})}> + </button>
                </div>
            </div>
        )
    }  
}

export default MyDrugs 