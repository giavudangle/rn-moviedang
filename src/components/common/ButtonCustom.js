import React from 'react'
import { View, Text ,Dimensions} from 'react-native'
import { Button } from 'react-native-paper'


const {width,height} = Dimensions.get('screen');

export default function ButtonCustom({onPressHandle,title}) {
  return (
    <View>
      <Button 
      labelStyle={{fontSize:15,fontWeight:'bold',textAlign:'center'}} 
      mode='contained' 
      style={{alignSelf:'center',marginTop:50,width:width/2,height:height/21,borderRadius:300,}} 
      onPress={onPressHandle}>{title}</Button>
    </View>
  )
}   
