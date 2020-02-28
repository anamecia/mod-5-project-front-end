import React from 'react'

const Brackdrop = ({ closeSearchForm }) => {
    return(
        <div className='backdrop' onClick={closeSearchForm}>
        </div>
    )
}

export default Brackdrop