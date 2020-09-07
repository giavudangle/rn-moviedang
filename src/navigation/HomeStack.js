import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MovieDetailScreen from '../screens/MovieDetailScreen';
import HomeScreen from '../screens/HomeScreen'
const HomeStack = createStackNavigator();


export default HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name='DetailMovie'
        component={MovieDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  )
}