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
import AddPlanScreen from '../screens/AddPlanScreen';
import PickingMovieScreen from '../screens/PickingMovieScreen';


const HomeStack = createStackNavigator();
const PlanStack = createStackNavigator();


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      
    }}>
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='home' />
          ),
          tabBarBadge: 3,
          tabBarLabel: '',

        }}
      />
      <Tab.Screen
        name='Plan'
        component={PlanStackNavigator}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='calendar' />
          ),
      
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
     
          tabBarLabel: '',

        }}
      />
      
     
    </Tab.Navigator>
  )
}

const PlanStackNavigator = () => {
  return(
    <PlanStack.Navigator mode='modal'>
      <PlanStack.Screen options={{headerShown:false}} name='PlanHome' component={PlanScreen}/>
      <PlanStack.Screen options={{headerShown:false}} name='AddPlan' component={AddPlanScreen}/>
      <PlanStack.Screen options={{headerShown:false}} name='Picking' component={PickingMovieScreen}/>
    </PlanStack.Navigator>
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

