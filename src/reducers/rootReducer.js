import moviesReducer from './moviesReducer';
import planReducer from './planReducer';
import authReducer from './authReducer'

import {combineReducers} from 'redux'

export default combineReducers({
  moviesReducer:moviesReducer,
  planReducer:planReducer,
  authReducer:authReducer
})