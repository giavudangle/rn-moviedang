import React from 'react'
import { View, Text ,Dimensions,StyleSheet} from 'react-native'
import { Button } from 'react-native-paper'


const {width,height} = Dimensions.get('screen');

export default function ButtonCustom({onPressHandle,title,...customStyle}) {
  return (
    <View>
      <Button 
      labelStyle={{fontSize:15,fontWeight:'bold',textAlign:'center'}} 
      mode='contained' 
      style={styles.button} 
      onPress={onPressHandle}
      color='red'
      {...customStyle}
      >{title}</Button>
    </View>
  )
}   
const styles = StyleSheet.create({
  button :{
    alignSelf:'center',marginTop:20,marginBottom:30,width:width/2,height:height/21,borderRadius:300

  }
})

