import React from 'react'

import SignInForm from './SignInForm'

const SignInPage = ({ signIn, history }) => {

    return(
        <div>
            <SignInForm signIn={signIn} history={history}/>
        </div>
    )
}

export default SignInPage