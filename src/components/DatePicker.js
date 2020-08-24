import React,{useState} from 'react'
import { View, Text,SafeAreaView,Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal } from 'react-native-paper';

export default function DatePicker({onChangeHandle,date}) {









  return (
    <View style={{zIndex:99}}>
    
   
    <DateTimePicker
    
    testID="dateTimePicker"
    value={date}
    mode='date'
    is24Hour={true}
    display="default"
    onChange={onChangeHandle}
    
    />
  
   
    </View>
      
    
  );
}
