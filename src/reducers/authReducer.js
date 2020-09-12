import { act } from 'react-test-renderer';
import Types from '../actions/actionTypes';

const initialState = {
  user:null,
  loading:false,
  error:''
}

export default authReducer = (state =initialState,action) => {
  switch(action.type){
    case Types.LOGIN_REQUEST:
      return {...state,loading:true}
    case Types.LOGIN_SUCCESS:
      return {...state,user:action.payload,loading:false}
    case Types.LOGIN_ERROR:
      return {...state,error:action.payload.userInfo.message,loading:false}
    default:
      return state
  }
}