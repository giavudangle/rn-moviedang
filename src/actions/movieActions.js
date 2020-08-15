/* Get API List Movies */
import Types from './actionTypes';

export const fetchList = () => {
  return (dispatch) => {
      return(
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=69938bebfb176098af2131f041f0f817&language=en-US&page=3')
        .then(res => res.json())
        .then(json => {
          return json.results
        })
        .then((data) => dispatch({type:Types.FETCH_LIST_MOVIES,payload:data}))
      ) 
    }
}


