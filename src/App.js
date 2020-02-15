import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SignUpPage from './components/SignUpPage'
import SignInPage from './components/SignInPage'


const App = () => {

    return(
        <div>
            <Switch>
                <Route path='/signup' component={SignUpPage}/>
                <Route path='/signin' component={SignInPage}/>
            </Switch>
        </div>
    )
}

export default App