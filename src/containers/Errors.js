import React from 'react'
import Error from '../components/Error'

const Errors = ({errors}) => {
    return(
        <div className='errors'>
            {errors.map(error => <Error error={error} key={error.indexOf()}/>)}
        </div>
    )
   
}

export default Errors