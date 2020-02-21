import React from 'react'
import RescueDrug from '../components/RescueDrug'


const RescueDrugs = ({ userRescueDrugs, updateUserMedicines }) => {
    return(
        <div>
            {userRescueDrugs.map(drug => <RescueDrug 
                drug={drug} 
                key={drug.id}
                updateUserMedicines={updateUserMedicines}/>)}
        </div>
    )
}

export default RescueDrugs