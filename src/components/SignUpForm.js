import React from 'react'

const SignUpForm = () => {

    return(
        <div>
            <form>
                <label>Username</label>
                <input onChange={null} type='text'/>
                <label>Date of Birth</label>
                <input onChange={null} type='date'/>
                <label>Password</label>
                <input onChange={null} type='password'/>
                <label>Password Confirmation</label>
                <input onChange={null} type='password'/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default SignUpForm