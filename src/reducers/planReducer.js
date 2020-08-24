import Types from '../actions/actionTypes';

const initialState = {
  pickingMovie:{
    title:''
  }
}

export default planReducer = (state = initialState,action) => {
  switch (action.type){
    case Types.ADD_MOVIE_PLAN_SUCCESS:
      return {...state,pickingMovie:action.payload}
    default:
      return state;
  } 
}