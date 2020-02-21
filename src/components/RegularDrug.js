import React from 'react'
import API from '../API'

const RegularDrug = ({ drug, updateUserMedicines }) => {

    const updateRemainingDose = () => {
        const data = {
            remaining_doses: drug.remaining_doses - 1,
        }

        API.updateRx(drug.id,data)
        .then(updatedDrug => updateUserMedicines(drug, updatedDrug))
    }

    return(
        <div className='regular-drug'>
            <p>{drug.medicine.brand_name} {drug.medicine.dosage}</p>
            <p>{drug.medicine.drug_name.join(',')}</p>
            <p>Number of Remaining Doses</p>
            <p>{drug.remaining_doses}/{drug.medicine.number_of_doses[0]}</p>
            <button onClick={updateRemainingDose}>+</button>    
        </div>
    )
} 

export default RegularDrug 