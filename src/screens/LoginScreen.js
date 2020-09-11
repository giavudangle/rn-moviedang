import React from 'react'
import { View, Text,SafeAreaView,Dimensions,StyleSheet,Image } from 'react-native'
import {TextInput} from 'react-native-paper';

const {width,height} = Dimensions.get('screen');


export default function LoginScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../utils/moviedang.png')} style={styles.logo}/>
      </View>
      <View style={styles.inputContainer}>
      </View>
      <View style={styles.buttonContainer}>
      </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0095ff'
  },
  logoContainer:{
    flex:3,
    paddingTop:30

  },
  logo:{
    width:200,
    height:200,
    alignSelf:'center',
    borderRadius:5000,
  }
  ,
  inputContainer:{
    flex:4
  },
  buttonContainer:{
    flex:3
  }
})