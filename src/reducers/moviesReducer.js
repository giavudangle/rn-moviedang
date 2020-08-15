import Types from '../actions/actionTypes'

const initialState = {
  movies:[]
}

export default moviesReducer = (state = initialState,action) =>{
  switch(action.type){
    case Types.FETCH_LIST_MOVIES:
      return {...state,movies:action.payload}
    default:
      return state;
  }
}
