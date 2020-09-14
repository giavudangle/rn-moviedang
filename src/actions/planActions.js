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


export const addPlan = (plan) => {
  return async dispatch => {
    const existData = await (AsyncStorage.getItem('listPlan'));
    let newData = JSON.parse(existData)
    if(!newData){
      newData = []
    }
    newData.push(plan)
    await AsyncStorage.setItem('listPlan',JSON.stringify(newData));
    const getData = await (AsyncStorage.getItem('listPlan'));
    const resultData = JSON.parse(getData);
    dispatch({
      type:Types.ADD_NEW_PLAN,
      payload: resultData
    })
  }
}


export const deleteAllPlans = () => {
  return async dispatch => {
    await AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => alert('Delete All Plans Successfully !'));
    dispatch({
      type:Types.DELETE_ALL_PLANS
    })
  }
}

export const getListPlans = () => {
  return async dispatch => {
    const requestData = await AsyncStorage.getItem('listPlan');
    const data = JSON.parse(requestData);
    dispatch({
      type:Types.GET_LIST_PLANS,
      payload:data
    })
  }
  
  
}