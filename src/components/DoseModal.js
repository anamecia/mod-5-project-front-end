import React from 'react'

const DoseModal = ({ closeModal, resetPackaging }) => {

    const newPackaging = () => { 
        resetPackaging()
        closeModal()
    }

    return (
        <div>
            <p>You dont't have any remaining dose?</p>
            <p>Do you want to reset the packaging now?</p>
            <button onClick={newPackaging}>Yes</button>
            <button onClick={newPackaging}>No</button>
        </div>
    )
}

export default DoseModal