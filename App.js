import React from 'react';
import HomeScreen from './src/screens/HomeScreen'
import MovieDetailScreen from './src/screens/MovieDetailScreen'

import {Provider} from 'react-redux'
import store from './src/store'

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'






const Stack = createStackNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
       name='Home' 
       component={HomeScreen} 
       options={{
         headerShown:false
       }}
       />
      <Stack.Screen 
      name='DetailMovie' 
      component={MovieDetailScreen}
      
      />
    </Stack.Navigator>
  )
}


export default () => { 

  return(
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  )
}

