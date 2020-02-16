import React from 'react'

import SignUpForm from './SignUpForm'

const SignUpPage = ({ signIn, history }) => {

    return(
        <div>
            <SignUpForm signIn={signIn} history={history}/>
        </div>
    )
}

export default SignUpPage