import React from 'react';
import HomeScreen from './src/screens/HomeScreen'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import mockMoviesData from './src/mockMoviesData.json'



function moviesReducer(state = mockMoviesData.results ,action){
  console.log(state);
  return state;
}



const store = createStore(moviesReducer);

export default () => {
  return(
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  )
}