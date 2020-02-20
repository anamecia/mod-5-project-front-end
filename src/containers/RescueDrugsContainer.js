import React from 'react'
import RescueDrug from '../components/RescueDrug'


const RescueDrugs = ({ userRescueDrugs }) => {
    return(
        <div>
            {userRescueDrugs.map(drug => <RescueDrug drug={drug} key={drug.id}/>)}
        </div>
    )
}

export default RescueDrugs