import React from 'react'
import API from '../API'

const SeachResults = ({medicine, medicineType, addNewMedicineToUserDrugs, resetSeachForm }) => {

    const addMedicine = () => {
        const rescueValue = medicineType === 'rescue' ? true : false

        const data = {rx: { 
            medicine_id: medicine.id,
            remaining_doses: medicine.number_of_doses[0],
            rescue: rescueValue,
            taken_doses: []
        }}
        API.postMedicine(data)
        .then(data => addNewMedicineToUserDrugs({...data, medicine}))
        .then(() => resetSeachForm())

    }

    return(
        <div>
            <p id='search-result' onClick={addMedicine}>{medicine.brand_name} {medicine.dosage}</p>
        </div>
    )
}

export default SeachResults