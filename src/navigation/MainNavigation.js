import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import RootTabNavigator from './RootTabNavigator';
import AuthStackNavigator from './AuthStack';
import {useDispatch, useSelector} from 'react-redux'

import auth from '@react-native-firebase/auth'




const MainNavigation = () => {
 
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber; // unsubscribe on unmount
  }, []);

  
  return (
    <NavigationContainer>
      {user ?<RootTabNavigator/>: <AuthStackNavigator/>}
    </NavigationContainer>
  );
}


export default MainNavigation;

