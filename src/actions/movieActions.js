/* Get API List Movies */
import Types from './actionTypes';

export const fetchList = (page) => {
  const urlString =`https://api.themoviedb.org/3/movie/now_playing?api_key=69938bebfb176098af2131f041f0f817&language=en-US&page=${page}`;
  return (dispatch) => {
    dispatch({type:Types.FETCH_LIST_MOVIES_REQUEST})
      return(
        fetch(urlString)
        .then(res => res.json())
        .then(json => {
          return json.results
        })
        .then((data) => dispatch({type:Types.FETCH_LIST_MOVIES_SUCCESS,payload:data}))
        .catch((err) => err.message)
      ) 
    }
}


export const refreshListMovie = () => {
  return (dispatch) => {
    dispatch({type:Types.REFRESH_LIST_MOVIES})
    return fetchList(1)
  }
}

export const searchMovieWithName = (query) => {
  const url = 
  `https://api.themoviedb.org/3/search/movie?api_key=69938bebfb176098af2131f041f0f817&language=en-US&query=${query}&page=1&include_adult=false`
  return(dispatch) => {
    return(
      fetch(url)
      .then(res => res.json())
      .then(json=> {return json.results})
      .then((data) => dispatch({type:Types.SEARCH_MOVIE_WITH_NAME_SUCCESS,payload:data}))
    )
  }
}


