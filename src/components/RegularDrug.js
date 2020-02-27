import React, { Component } from 'react'
import API from '../API'
import DrugMoreInfo from './DrugMoreInfo'
import Modal from './Modal'
import inhaler from '../images/inhaler.svg'
import up from '../images/up-arrow.svg'
import down from '../images/down-arrow.svg'

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
            
            <div className='drug-container'>
                <div className='drug-info' onClick={this.toggleDisplayMoreInfo}>
                    <div>
                        <div className='medicine-name-container'>
                            <h1>{drug.medicine.brand_name} {drug.medicine.dosage}</h1>
                        </div>
                        <div className='arrow-container'>
                            <img  src={!this.state.displayMoreInfo ? down : up}/>
                        </div>
                    </div>
                    <p>{drug.medicine.drug_name.join(', ')}</p>
                    <h3>Number of Remaining Doses</h3>
                    <h3>{drug.remaining_doses}/{drug.medicine.number_of_doses[0]}</h3>
                </div>
                <div className='more-info'>
                {this.state.displayMoreInfo && <DrugMoreInfo 
                    drug={drug}
                    deleteUseMedicine={deleteUseMedicine}
                    resetPackaging ={this.resetPackaging}/>}
                </div>
                <button className='dose-button' onClick={this.updateRemainingDose}><img src={inhaler}/></button> 
                {this.state.showDoseModal && <Modal 
                        closeModal={this.closeModal} 
                        resetPackaging ={this.resetPackaging}/>}
            </div>  
        )
    }
} 

export default RegularDrug 