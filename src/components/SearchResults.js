import React from 'react'

const SeachResults = ({ medicine }) => {
    return(
        <div>
            <p id='search-result'>{medicine.brand_name} {medicine.dosage}</p>
        </div>
    )
}

export default SeachResults