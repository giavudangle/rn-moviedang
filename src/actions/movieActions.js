/* Get API List Movies */

import Types from './actionTypes';
import movieAPI from '../api/movieAPI';
import {apiConfig} from '../config/rootConfig'

export const fetchList = (page) => {
  return async dispatch => {
    dispatch({type:Types.FETCH_LIST_MOVIES_REQUEST})
    try {
      const resultData = await
      movieAPI
      .get(`/movie/now_playing?api_key=${apiConfig.API_KEY}&language=${apiConfig.LANG}&page=${page}`)
      dispatch({type:Types.FETCH_LIST_MOVIES_SUCCESS,payload:resultData.data.results})
    }
    catch(e){
      console.log(e);
    }
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


export const refreshControl = () => {
  fetchList(1);
}

