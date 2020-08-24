import React from 'react'
import { View, Text, Dimensions, TouchableOpacity,Image,StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import mockTheaterData from '../utils/mockTheaterData.json'
import MapTheaterScreen from './MapTheaterScreen'

const { width, height } = Dimensions.get('screen');
 
const _handlePressDetail = () => {

}


const TheaterDetail = ({ item }) => {
  return (
    <TouchableOpacity onPress={_handlePressDetail}>
      <View style={styles.container}>
        <View style={{flex:2}}>
          <Image style={{width:50,height:50,borderRadius:300}} source={{uri:item.logo_url}}/>
        </View>
        <View style={{flex:8}}>
          <Text style={{ fontSize: 22, color: 'white'}}>{item.cinema_name}</Text>
          <Text style={{  color: 'white', fontWeight: '100' }}>{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>

  )
}


export default function CinemaScreen({navigation}) {
  return (
 
    <SafeAreaView style={{ backgroundColor: '#193561' ,opacity:0.9}}>
      <Text style={{ fontSize: 30, fontWeight: "bold", alignSelf: "center", color: 'white' }}>THEATER</Text>
      <FlatList
        data={mockTheaterData.cinemas}
        renderItem={({ item }) => <TheaterDetail item={item} />}
        style={{alignSelf:'center'}}
      /> 
    
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#4287f5', margin: 10, width: width / 1.1, height: height / 8 ,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    flex:1,
    opacity:0.94,
    borderRadius:20,
    paddingHorizontal:10
  }
})