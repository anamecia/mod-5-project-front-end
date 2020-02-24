import React from 'react'
import RescueDrug from '../components/RescueDrug'


const RescueDrugs = ({ userRescueDrugs, updateUserMedicines, deleteUseMedicine }) => {
    return(
        <>
            {userRescueDrugs.map(drug => <RescueDrug 
                drug={drug} 
                key={drug.id}
                deleteUseMedicine={deleteUseMedicine}
                updateUserMedicines={updateUserMedicines}/>)}
        </>
    )
}

export default RescueDrugs