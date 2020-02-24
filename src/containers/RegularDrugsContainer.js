import React from 'react'
import RegularDrug from '../components/RegularDrug'


const RegularDrugs = ({ userRegularDrugs, updateUserMedicines, deleteUseMedicine }) => {
    return(
        <>
           {userRegularDrugs.map(drug => <RegularDrug 
                drug={drug} 
                key={drug.id}
                deleteUseMedicine={deleteUseMedicine}
                updateUserMedicines={updateUserMedicines}/>)}
        </>
    )
}

export default RegularDrugs