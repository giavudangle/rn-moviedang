import React from 'react';
import {Provider} from 'react-redux'
import store from './src/store'

import MainNavigation from './src/navigation/MainNavigation';









export default () => { 
  return(
    <Provider store={store}>
      <MainNavigation/>
    </Provider>
  )
}

