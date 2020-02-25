import React from 'react'
import API from '../API'
import bin from '../images/bin.svg'
import leaflet from '../images/leaflet.svg'


const DrugMoreInfo = ({ drug, deleteUseMedicine, resetPackaging}) => {

    const deleteUserDrug = () => {
        API.deleteRx(drug.id)
        .then(() => deleteUseMedicine(drug))
    }

    return(
        <>
            <button id='reset-button' onClick={resetPackaging}>reset</button>
            <div className='logos-container'>
                <a className='logo' rel='noopener noreferrer' href={drug.medicine.leaflet} target="_blank"><img className='drug-more-info-logo' src={leaflet}/></a>
                <button className='logo' onClick={deleteUserDrug}><img className='drug-more-info-logo' src={bin}/></button>
            </div>
        </>
    )
}

export default DrugMoreInfo 