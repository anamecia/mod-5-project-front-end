import React from 'react'

const RescueDrug = ({ drug }) => {
    return(
        <div>
            <p>{drug.medicine.brand_name} {drug.medicine.dosage}</p>
            <p>{drug.medicine.drug_name.join(',')}</p>
            <p>Number of Remaining Doses</p>
            <p>{drug.remaining_doses}/{drug.medicine.number_of_doses[0]}</p>
            <button onClick={null}>+</button>
        </div>
    )
} 

export default RescueDrug 