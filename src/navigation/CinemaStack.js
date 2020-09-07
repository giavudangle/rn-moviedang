import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const CinemaStack = createStackNavigator();
import CinemaScreen from '../screens/CinemaScreen'
import MapTheaterScreen from '../screens/MapTheaterScreen'

export default CinemaStackNavigator = () => {
  return (
    <CinemaStack.Navigator mode='card'>
      <CinemaStack.Screen options={{headerShown:false}} name='Cinema' component={CinemaScreen}/>
      <CinemaStack.Screen options={{headerShown:false}} name='MapCinema' component={MapTheaterScreen}/>
    </CinemaStack.Navigator>
  )
}
