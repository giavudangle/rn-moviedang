import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import RootTabNavigator from './RootTabNavigator';









const MainNavigation = () => {
  return (
    <NavigationContainer>
      <RootTabNavigator />
    </NavigationContainer>
  );
}


export default MainNavigation;

