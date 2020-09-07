import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PlanScreen from '../screens/PlanScreen'
import AddPlanScreen from '../screens/AddPlanScreen';
import PickingMovieScreen from '../screens/PickingMovieScreen';
const PlanStack = createStackNavigator();


export default PlanStackNavigator = () => {
  return(
    <PlanStack.Navigator mode='modal'>
      <PlanStack.Screen options={{headerShown:false}} name='PlanHome' component={PlanScreen}/>
      <PlanStack.Screen options={{headerShown:false}} name='AddPlan' component={AddPlanScreen}/>
      <PlanStack.Screen options={{headerShown:false}} name='Picking' component={PickingMovieScreen}/>
    </PlanStack.Navigator>
  )
} 

