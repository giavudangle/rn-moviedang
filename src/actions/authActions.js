import auth from '@react-native-firebase/auth';
import Types from './actionTypes'
export const loginWithEmailPassword = (email,password) => {
  return async dispatch => {
    dispatch({type:Types.LOGIN_REQUEST})
    try {
      const user =  await 
        auth().signInWithEmailAndPassword(email,password);
      dispatch({
        type:Types.LOGIN_SUCCESS,
        payload:user
      });
    }
    catch(e){
      dispatch({
        type:Types.LOGIN_ERROR,
        payload:e
      })
    }
  }
}



export const registerWithEmailPassword = (email,password) => {
  return async dispatch => {
    dispatch({type:Types.LOGIN_REQUEST})
    try {
      const user =  await 
        auth().createUserWithEmailAndPassword(email,password);
      dispatch({
        type:Types.LOGIN_SUCCESS,
        payload:user
      });
    }
    catch(e){
      dispatch({
        type:Types.LOGIN_ERROR,
        payload:e
      })
    }
  }
}


export const logoutUser = () => {
  return dispatch => {
    auth().signOut();
  }
}


