import {combineReducers} from 'redux'
import adminsReducer from './adminsReducer'
import authReducer from './authReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  admins: adminsReducer,
  auth: authReducer,
  users: usersReducer,
})
