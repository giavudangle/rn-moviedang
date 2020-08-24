import Types from './actionTypes';


export const addMovieToPlan = (movie) => {
  return dispatch => {
    dispatch({
      type:Types.ADD_MOVIE_PLAN_SUCCESS,
      payload:movie
    })
  }
}