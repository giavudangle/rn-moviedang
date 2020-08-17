import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'



import MovieDetailScreen from '../screens/MovieDetailScreen'
import HomeScreen from '../screens/HomeScreen'

import SearchMovieScreen from '../screens/SearchMoviesScreen'
import PlanScreen from '../screens/PlanScreen'
import CinemaScreen from '../screens/CinemaScreen'
import ProfileScreen from '../screens/ProfileScreen'


import Ant from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='home' />
          ),
          tabBarBadge: 99,
          tabBarLabel: '',

        }}
      />
      <Tab.Screen
        name='Plan'
        component={PlanScreen}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='calendar' />
          ),
          tabBarBadge: 99,
          tabBarLabel: '',

        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchMovieScreen}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='search1' />
          ),
          tabBarBadge: 99,
          tabBarLabel: '',

        }}
      />
      <Tab.Screen
        name='Cinema'
        component={CinemaScreen}
        options={{
          tabBarIcon: () => (
            <Icon style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='theater' />
          ),
          tabBarBadge: 99,
          tabBarLabel: '',

        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='user' />
          ),
          tabBarBadge: 99,
          tabBarLabel: '',

        }}
      />
      
     
    </Tab.Navigator>
  )
}




const HomeStackNavigator = () => {
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

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}


export default MainNavigation;

