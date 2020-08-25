import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'

export default function MapTheaterScreen() {
  return (
    
    <MapView
    style={{flex:1}}
    initialRegion={{
      latitude:10.780503,
      longitude: 106.638376,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421}}/>
   
  )
}
