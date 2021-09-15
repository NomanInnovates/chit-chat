import { combineReducers } from "redux";
import authReducer from './reducers/authReducer'
import roomReducer from './reducers/roomReducer'
import messageReducer from './reducers/messageReducer'
const rootReducers = combineReducers({
    authReducer ,roomReducer,messageReducer
})
export default rootReducers