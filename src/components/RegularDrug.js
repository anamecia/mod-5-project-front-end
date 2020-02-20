import React from 'react'

const RegularDrug = ({ drug }) => {
    return(
        <div>
            <div>
                <p>{drug.medicine.brand_name} {drug.medicine.dosage}</p>
                <p>{drug.medicine.drug_name.join(',')}</p>
                <p>Number of Remaining Doses</p>
                <p>{drug.remaining_doses}/{drug.medicine.number_of_doses}</p>
                <button onClick={null}>+</button>
            </div>
        </div>
    )
} 

export default RegularDrug 