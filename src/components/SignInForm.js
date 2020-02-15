import React from 'react'

const SignInForm = () => {

    return(
        <div>
            <form>
                <label>Username</label>
                <input onChange={null} type='text'/>
                <label>Password</label>
                <input onChange={null} type='password'/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default SignInForm