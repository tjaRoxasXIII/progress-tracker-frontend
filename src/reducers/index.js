import { combineReducers } from 'redux'
import authReducer from './authReducer'
import goalReducer from './goalReducer'

export default combineReducers({
    auth: authReducer,
    goals: goalReducer
})