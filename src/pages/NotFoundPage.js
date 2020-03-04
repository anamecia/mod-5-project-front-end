import React from 'react'
import error from '../images/error.svg'

const NotFoundPage = () =>{
    return(
        <div className='not-found-container'>
            <img src={error} alt='not found icon'/>
            <p>Page not found</p>
        </div>
    )
}

export default NotFoundPage