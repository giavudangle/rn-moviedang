import React from 'react';
import {Provider} from 'react-redux'
import store from './src/store'

import MainNavigation from './src/navigation/MainNavigation';
import {Provider as PaperProvider} from 'react-native-paper'


export default () => { 
  return(
    <Provider store={store}>
      <PaperProvider>
      <MainNavigation/>
      </PaperProvider>
     
    </Provider>
  )
}

