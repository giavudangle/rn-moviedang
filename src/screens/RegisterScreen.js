import React, { useState } from 'react'
import { View, Text,SafeAreaView,Dimensions,StyleSheet,Image ,ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import Ant from 'react-native-vector-icons/AntDesign';
import {useDispatch,useSelector} from 'react-redux'
import {registerWithEmailPassword} from '../actions/authActions'
import Loading from '../components/common/Loading'

const {width,height} = Dimensions.get('screen');

export default function RegisterScreen(props) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state.authReducer)

  const _handleLogin = async () => {
    dispatch(registerWithEmailPassword(email,password))
  }
  

  if(state.loading) return <Loading/> 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../utils/moviedang.png')} style={styles.logo}/>
      </View>
      <View style={{flex:3,marginTop:0}}>
        <View style={styles.inputContainer}>
          <Ant style={{top:10,paddingLeft:10}} color='white'  name='user' size={30}/>    
            <TextInput
            style={styles.textInput} 
            label='Email' mode='outlined'
            keyboardType='email-address'
            theme={{
              colors:{
                primary:'gray',
                underlineColor:'transparent',
              }
            }}
            onChangeText={(text) => setEmail(text)}
            />
        </View>
        <View style={styles.inputContainer}>
          <Ant style={{top:10,paddingLeft:10}} color='white' name='eye' size={30}/>    
            <TextInput
            secureTextEntry={true}
            style={styles.textInput} 
            label='Password' mode='outlined'
            theme={{
              colors:{
                primary:'gray',
                underlineColor:'gray',             
              }
            }}
            onChangeText={(text) => setPassword(text)}
            />
        </View>
      
      </View>
      <View style={styles.buttonContainer}>
        <Button 
        mode='contained'
        color='#0095ff'
        style={styles.button}
        onPress={_handleLogin}
        >Register</Button>
        {state.error ? <Text  style={{paddingTop:15,fontSize:13,textAlign:'center',color:'white'}} >{state.error}</Text> : null}

        <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={styles.text}>Already have account ?</Text>

        </TouchableOpacity>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0095ff',
    paddingVertical:50
  },
  logoContainer:{
    flex:4,
    paddingTop:30

  },
  logo:{
    width:200,
    height:200,
    alignSelf:'center',
    borderRadius:5000,
  } ,
  inputContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'stretch',
    paddingLeft:10,
    paddingTop:24
    
  },
  textInput:{
    width:width/1.3,
    height:height/18,
    paddingLeft:10,
    
  },
  buttonContainer:{
    flex:4,
    paddingTop:50
  },
  button:{
    width:width/1.5,
    height:height/16,
    borderRadius:300,
    alignSelf:'center',
    paddingTop:6,
    borderColor:'white',
    borderWidth:0.5
    
  },
  text:{
    fontSize:20,
    fontWeight:'300',
    alignSelf:'center',
    paddingTop:30,
    color:'white'
  }
})