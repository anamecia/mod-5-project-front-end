import React from 'react'
import RegularDrug from '../components/RegularDrug'


const RegularDrugs = ({ userRegularDrugs }) => {
    return(
        <div>
           {userRegularDrugs.map(drug => <RegularDrug drug={drug} key={drug.id}/>)}
        </div>
    )
}

export default RegularDrugs