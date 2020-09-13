import Types from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';


export const addMovieToPlan = (movie) => {
  return dispatch => {
    dispatch({
      type:Types.ADD_MOVIE_PLAN_SUCCESS,
      payload:movie
    })
  }
}

export const getListPlan = () => {
  return async dispatch => {
    const requestData = await AsyncStorage.getItem('listPlan');
    const data = JSON.parse(requestData);
    console.log(data);
    dispatch({
      type:Types.GET_LIST_PLANS,
      payload:data
    })
  }
  
  
}