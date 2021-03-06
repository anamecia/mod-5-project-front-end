import React from 'react'

import SignInForm from '../components/SignInForm'

const SignInPage = ({ signIn, history }) => {

    return(
        <div className='sign-pages'>
            <SignInForm signIn={signIn} history={history}/>
        </div>
    )
}

export default SignInPage