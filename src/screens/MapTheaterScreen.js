import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import MapView, { Circle } from 'react-native-maps'

import Ant from 'react-native-vector-icons/AntDesign'

export default function MapTheaterScreen({route,navigation}) {
  const {lat,lng} = route.params.coors;
  const coors = {
    latitude: lat,
    longitude: lng,
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#4976d6',opacity:0.85}}>
    <View style={{flex:1}}>
    <Ant onPress={() => navigation.goBack()} style={{zIndex:99,left:30}} name='arrowleft' size={40} color='white'/>
    <Text style={{fontSize:30,fontWeight:'bold',color:'black',textAlign:'center',bottom:40}}>MAP</Text>
    </View>
    <MapView
    style={{flex:9}}
    initialRegion={{
      latitude:lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421}}
    
    >
      <Circle
        center={coors}
        radius={1000}
        strokeColor='red'
      />
    </MapView>
    
    
    </SafeAreaView>
    
   
  )
}
