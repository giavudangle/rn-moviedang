import moviesReducer from './moviesReducer';
import planReducer from './planReducer';


import {combineReducers} from 'redux'

export default combineReducers({
  moviesReducer:moviesReducer,
  planReducer:planReducer
})