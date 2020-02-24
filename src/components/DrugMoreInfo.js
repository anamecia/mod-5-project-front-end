import React from 'react'
import API from '../API'

const DrugMoreInfo = ({ drug, deleteUseMedicine, resetPackaging}) => {

    const deleteUserDrug = () => {
        API.deleteRx(drug.id)
        .then(() => deleteUseMedicine(drug))
    }

    return(
        <>
            <button onClick={resetPackaging}>reset</button>
            <div>
                <a rel='noopener noreferrer' href={drug.medicine.leaflet} target="_blank">L</a>
                <button onClick={deleteUserDrug}>D</button>
            </div>
        </>
    )
}

export default DrugMoreInfo 