import React from 'react'

const Brackdrop = ({ closeSearchForm, toggleShowMenu }) => {
    return(
        <div className='backdrop' onClick={closeSearchForm || toggleShowMenu}>
        </div>
    )
}

export default Brackdrop