import Types from '../actions/actionTypes';

const initialState = {
  listPlan:[],
  pickingMovie:{
    title:''
  }
}

export default planReducer = (state = initialState,action) => {
  switch (action.type){
    case Types.GET_LIST_PLANS:
      return {...state,listPlan:action.payload}
    case Types.ADD_MOVIE_PLAN_SUCCESS:
      return {...state,pickingMovie:action.payload}
    case Types.ADD_NEW_PLAN:
      return {...state,listPlan:action.payload}
    case Types.DELETE_ALL_PLANS:
      return {...state,listPlan:[]}
    default:
      return state;
  } 
}