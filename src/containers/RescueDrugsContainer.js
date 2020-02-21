import React from 'react'
import RescueDrug from '../components/RescueDrug'


const RescueDrugs = ({ userRescueDrugs, updateUserMedicines, deleteUseMedicine }) => {
    return(
        <div>
            {userRescueDrugs.map(drug => <RescueDrug 
                drug={drug} 
                key={drug.id}
                updateUserMedicines={updateUserMedicines}
                deleteUseMedicine={deleteUseMedicine}/>)}
        </div>
    )
}

export default RescueDrugs