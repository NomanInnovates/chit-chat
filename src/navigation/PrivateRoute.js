import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute ({children , isLogin ,...rest}) {
    return <Route {...rest} render={()=> isLogin ? children : <Redirect to="/" />} />
}

export default PrivateRoute