import React, { Component } from 'react'
import API from '../API'
import DrugMoreInfo from './DrugMoreInfo'

class RescueDrug extends Component{

    state={
        displayMoreInfo:false
    }

    updateRemainingDose = () => {
        const { drug, updateUserMedicines } = this.props
        const data = {
            remaining_doses: drug.remaining_doses - 1,
        }

        API.updateRx(drug.id,data)
        .then(updatedDrug => updateUserMedicines(drug, updatedDrug))
    }

    toggleDisplayMoreInfo = () => {
        this.setState({
            displayMoreInfo: !this.state.displayMoreInfo
        })
    }

    render(){
        const { drug } = this.props
        return(
            <div>
                <div onClick={this.toggleDisplayMoreInfo}>
                    <p>{drug.medicine.brand_name} {drug.medicine.dosage}</p>
                    <p>{drug.medicine.drug_name.join(',')}</p>
                    <p>Number of Remaining Doses</p>
                    <p>{drug.remaining_doses}/{drug.medicine.number_of_doses[0]}</p>
                </div>
                <button onClick={this.updateRemainingDose}> + </button>
                {this.state.displayMoreInfo && <DrugMoreInfo drug={drug}/>}
            </div>
        )
    }
} 

export default RescueDrug 