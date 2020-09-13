import React,{useEffect, useState} from 'react'
import { View, Text ,ScrollView,TouchableOpacity,FlatList,Image} from 'react-native'
import {Calendar,} from 'react-native-calendars'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ant from 'react-native-vector-icons/AntDesign';

import {detailMovieConfig} from '../config/rootConfig';

import {getListPlan} from '../actions/planActions';

import {useSelector,useDispatch} from 'react-redux';


const currentDate = new Date().toISOString().slice(0,10)

export default function  PlanScreen({navigation}) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.planReducer );

  console.log(state);
  useEffect(() => {
    dispatch(getListPlan());
  },[])

  const PlanItem = ({item}) => {
    return(
      <View 
      style={{backgroundColor:'#0095ff',opacity:0.95,alignItems:'center'
      ,flexDirection:'row',paddingVertical:4,borderBottomWidth:1,
      borderBottomColor:'white'}}>
        <View>
          <Image 
          resizeMode='contain'
          style={{width:120,height:120}} 
          source={{uri:detailMovieConfig.CDN_URL + item.movie.poster_path}}/>
        </View>     
        <View style={{justifyContent:'flex-start',paddingHorizontal:30}}>
          <Text style={{fontSize:24,fontWeight:'bold',color:'white',textTransform:'uppercase',padding:4}}>{item.plan}</Text>
          <Text style={{fontSize:20,color:'#ff0000',fontWeight:'bold',padding:4}}>{item.movie.title}</Text>
          <Text style={{fontSize:18,color:'white',fontWeight:'500',padding:4}}>Theater : {item.theater}</Text>
          <Text style={{fontSize:16,color:'white',fontWeight:'500',padding:4}}>Friends : {item.friend}</Text>
          <Text style={{fontSize:22,color:'white',fontWeight:'bold',padding:4}}>Date: {item.date}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',paddingBottom:10}}>
        <Text style={{left:120,fontSize:30,color:'#0095ff',fontWeight:'900'}}>LIST PLAN</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddPlan')}>
        <Ant 
        style={{paddingRight:20,paddingBottom:10,top:8}}
        name='pluscircleo' color='#0095ff' size={28}
        />
        </TouchableOpacity>
      </View>
      <View>
        <Calendar 
          current={currentDate}
          markedDates={{
            currentDate:{
              marked:true,
              selected:true,
              selectedColor:'blue'
            }
          }}
        onDayPress={(date) => console.log(date)}
        />
      </View>
      <View>
        <FlatList
        style={{marginTop:10}}
        data={state.listPlan}
        renderItem={({item}) => <PlanItem item={item}/>}
        />
      </View>
    

      </ScrollView>
    </SafeAreaView>
  )
}

