import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import RootTabNavigator from './RootTabNavigator';

import AuthStackNavigator from './AuthStack';

const flag = true;






const MainNavigation = () => {
  return (
    <NavigationContainer>
    {flag ? <AuthStackNavigator/> : <RootTabNavigator/>}
    </NavigationContainer>
  );
}


export default MainNavigation;

