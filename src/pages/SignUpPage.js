import React from 'react'

import SignUpForm from '../components/SignUpForm'

const SignUpPage = ({ signIn, history }) => {

    return(
        <div className='sign-pages'>
            <SignUpForm signIn={signIn} history={history}/>
        </div>
    )
}

export default SignUpPage