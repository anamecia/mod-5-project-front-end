import React from 'react'

const SeachResults = ({ medicine }) => {
    return(
        <div>
            <p>{medicine.brand_name} {medicine.dosage}</p>
        </div>
    )
}

export default SeachResults