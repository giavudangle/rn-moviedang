import React from 'react';
import HomeScreen from './src/screens/HomeScreen'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './src/reducers/rootReducer';

const store = createStore(rootReducer,applyMiddleware(thunk));


export default () => { 

  return(
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  )
}