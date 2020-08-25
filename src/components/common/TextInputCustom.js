import React from 'react'
import { View, Text,StyleSheet,Dimensions,TouchableWithoutFeedback } from 'react-native'
import {TextInput} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';

const {width,height} = Dimensions.get('screen');

export default function TextInputCustom({valueRef,place,name,onChangeTextHandle,onTouchHandle,onTouchEndHandle,keyboardType}) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
      <Icon style={{}} name={name} size={25}/>
      <TextInput 
      value={valueRef}
      onBlur={onTouchEndHandle}
      editable={keyboardType}
      onChangeText={onChangeTextHandle}
      onTouchStart={onTouchHandle}
      mode='outlined'
      theme={{
        colors:{
          primary:'red',
          underlineColor:'transparent'
        }    
      }} placeholder={place} style={styles.textInput}/>    
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    marginVertical:2,

    
  },
  textInputContainer:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:'row'
  },  
  textInput:{
    width:width/1.3,
    height:height/20,
    paddingHorizontal:10
  }
})


