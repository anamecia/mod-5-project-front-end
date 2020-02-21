import React from 'react'
import API from '../API'

const DrugMoreInfo = ({ drug, deleteUseMedicine, updateUserMedicines}) => {

    const deleteUserDrug = () => {
        API.deleteRx(drug.id)
        .then(() => deleteUseMedicine(drug))
    }

    const resetPackaging = () => {
        const data = {
            remaining_doses: drug.medicine.number_of_doses[0]
        }
        API.updateRx(drug.id, data)
        .then(updatedDrug => updateUserMedicines(drug, updatedDrug))
    }

    return(
        <div>
            <button onClick={resetPackaging}>reset</button>
            <a href={drug.medicine.leaflet} target="_blank">L</a>
            <button onClick={deleteUserDrug}>D</button>
        </div>
    )
}

export default DrugMoreInfo 