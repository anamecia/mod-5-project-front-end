import React from 'react'
import RegularDrug from '../components/RegularDrug'


const RegularDrugs = ({ userRegularDrugs, updateUserMedicines, deleteUseMedicine }) => {
    return(
        <div>
           {userRegularDrugs.map(drug => <RegularDrug 
                drug={drug} 
                key={drug.id}
                deleteUseMedicine={deleteUseMedicine}
                updateUserMedicines={updateUserMedicines}/>)}
        </div>
    )
}

export default RegularDrugs