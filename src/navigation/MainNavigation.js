import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import MovieDetailScreen from '../screens/MovieDetailScreen'


const Stack = createStackNavigator();
const StackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
       name='Home' 
       component={HomeScreen} 
       options={{
         headerShown:false,
       }}
       />
      <Stack.Screen 
      name='DetailMovie' 
      component={MovieDetailScreen}
      options={{
        headerShown:false,  
      }}
      />
    </Stack.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}


export default MainNavigation;

