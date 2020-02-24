import React, { Component } from 'react'
import API from '../API'
import DrugMoreInfo from './DrugMoreInfo'
import DoseModal from './DoseModal'
var moment = require('moment')


class RegularDrug extends Component{
    state={
        displayMoreInfo:false,
        showDoseModal: false
    }

    updateRemainingDose = () => {
        const { drug, updateUserMedicines } = this.props
        if (drug.remaining_doses !== 0){
            const data = {
                remaining_doses: drug.remaining_doses - 1,
                date: moment().format("Do MMM YYYY")
            }

            API.updateRx(drug.id,data)
            .then(updatedDrug => updateUserMedicines(drug, updatedDrug))
        } else 
            this.setState({
                showDoseModal: true
            })
    }

    toggleDisplayMoreInfo = () => {
        this.setState({
            displayMoreInfo: !this.state.displayMoreInfo
        })
    }

    closeModal = () => {
        this.setState({ showDoseModal: false})
    }

    resetPackaging = () => {
        const { drug, updateUserMedicines } = this.props
        const data = {
            remaining_doses: drug.medicine.number_of_doses[0]
        }
        API.updateRx(drug.id, data)
        .then(updatedDrug => updateUserMedicines(drug, updatedDrug))
    }

    render(){
        const { drug, deleteUseMedicine } = this.props
        return(
            <div className='regular-drug'>
                <div onClick={this.toggleDisplayMoreInfo}>
                    <p>{drug.medicine.brand_name} {drug.medicine.dosage}</p>
                    <p>{drug.medicine.drug_name.join(', ')}</p>
                    <p>Number of Remaining Doses</p>
                    <p>{drug.remaining_doses}/{drug.medicine.number_of_doses[0]}</p>
                </div>
                <button onClick={this.updateRemainingDose}>+</button> 
                {this.state.displayMoreInfo && <DrugMoreInfo 
                    drug={drug}
                    deleteUseMedicine={deleteUseMedicine}
                    resetPackaging ={this.resetPackaging}/>}
                {this.state.showDoseModal && <DoseModal closeModal={this.closeModal} resetPackaging ={this.resetPackaging}/>}
            </div>
        )
    }

    
} 

export default RegularDrug 