import React from 'react'
import { View, Text,SafeAreaView ,Image} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import Ant from 'react-native-vector-icons/AntDesign'
import ButtonCustom from '../components/common/ButtonCustom'

const url='https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/116437552_2564729873838206_6347637951277764465_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=eRXA_UG4hAIAX8Wqkzg&_nc_oc=AQk8hc-B_WJbSSXNRss-5IpWBbG6X3yEL--B2WJtYYjs-B-SK_lPIQMOZtlQpRIulpw&_nc_ht=scontent.fsgn2-6.fna&oh=2e00f8228eed012639c6796a5ebf8065&oe=5F693F25'
const UserDetail = (custom) => {
  return (
    <View style={{flex:2,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:30,alignItems:'center',backgroundColor:'white'}}>
      <Image source={{uri:url}} style={{width:100,height:100,borderRadius:300}}/>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Gia Vũ</Text>
      <Ant name='customerservice' size={40} color='black'/>
    </View>

  )
}

const mockData = [
  {
  icon:'customerservice',
  feature:'Test1'
  },
  {
    icon:'customerservice',
    feature:'Test1'
  },
  {
    icon:'customerservice',
    feature:'Test1'
  }
]
 



const FeatureRenderItem = ({item}) => {
  return(
    <View style={{padding:20,backgroundColor:'#c7c5bf',flexDirection:'row',paddingHorizontal:4,borderColor:'gray',borderWidth:0.2,}}>
      <Ant style={{paddingHorizontal:20}} name={`${item.icon}`} size={30} color='black'/>
      <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center'}}>{item.feature}</Text>
    </View>
  )
}


export default function ProfileScreen() {
  return (
    <SafeAreaView style={{backgroundColor:'#c7c5bf',flex:1}}>
    
      <UserDetail  />
      <View style={{flex:8,marginTop:30}}>
        <FlatList 
        data={mockData}
        renderItem={({item}) => <FeatureRenderItem item={item}/>}
      />
      </View>
      <ButtonCustom onPressHandle={() => {}} title='logout'  />
  
   
   
     
    </SafeAreaView>
  )
}


