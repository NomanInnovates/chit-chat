import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useSelector } from "react-redux"
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

// pages 
import Chat from '../pages/Chat'
import Signin from '../pages/Signin'
import Room from '../pages/Room'
function Navigation() {
    const isLogin = useSelector(store => store.authReducer.isLogin)
    console.log("navigation",isLogin)
    // const isLogin = false
    return (
        <Router>
            <Switch>
                <PublicRoute isLogin={isLogin}  path="/" exact>
                    <Signin />
                </PublicRoute>
                
                <PrivateRoute isLogin={isLogin}  path="/chats" >
                    <Chat />
                </PrivateRoute>
        
                <PrivateRoute isLogin={isLogin}  path="/room/:id"  >
                    <Room />
                </PrivateRoute>


                {/* <PrivateRoute isLogin={isLogin}  path="/todos" >
                    <TodoPage />
                </PrivateRoute> */}


            </Switch>
        </Router>
    );
}

export default Navigation
