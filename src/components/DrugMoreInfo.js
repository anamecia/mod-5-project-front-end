import React from 'react'
import API from '../API'

const DrugMoreInfo = ({ drug, deleteUseMedicine }) => {

    const deleteUserDrug = () => {
        API.deleteRx(drug.id)
        .then(() => deleteUseMedicine(drug))
    }

    return(
        <div>
            <a href={drug.medicine.leaflet} target="_blank">L</a>
            <button onClick={deleteUserDrug}>D</button>
        </div>
    )
}

export default DrugMoreInfo 