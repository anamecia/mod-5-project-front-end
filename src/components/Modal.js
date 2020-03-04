import React from 'react'

const Modal = ({ closeModal, resetPackaging }) => {

    const newPackaging = () => { 
        resetPackaging()
        closeModal()
    }

    return (
        <div className='modal'>
            <p>You don't have any remaining doses.</p>
            <p>Would you like to reset the packaging now?</p>
            <div className='modal-buttons'>
                <button onClick={newPackaging}>Yes</button>
                <button onClick={closeModal}>No</button>
            </div >
        </div>
    )
}

export default Modal