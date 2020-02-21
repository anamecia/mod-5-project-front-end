import React from 'react'

const DrugMoreInfo = ({ drug }) => {

    return(
        <div>
            <a href={drug.medicine.leaflet} target="_blank">L</a>
            <button>Delete</button>
        </div>
    )
}

export default DrugMoreInfo 