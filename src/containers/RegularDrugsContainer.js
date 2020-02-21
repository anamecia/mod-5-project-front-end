import React from 'react'
import RegularDrug from '../components/RegularDrug'


const RegularDrugs = ({ userRegularDrugs, updateUserMedicines }) => {
    return(
        <div>
           {userRegularDrugs.map(drug => <RegularDrug 
                drug={drug} 
                key={drug.id}
                updateUserMedicines={updateUserMedicines}/>)}
        </div>
    )
}

export default RegularDrugs