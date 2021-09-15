import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PublicRoute({children , isLogin , ...rest}) {
    return <Route render={()=> isLogin ? <Redirect to="/chats" /> : children} />
}

export default PublicRoute
