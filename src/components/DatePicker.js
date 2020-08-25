import React,{useState} from 'react'
import { View, Text,SafeAreaView, } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal,Portal,Button } from 'react-native-paper';

export default function DatePicker({onChangeHandle,date}) {


  const [visible, setVisible] = React.useState(true);

  const showModal = () => setVisible(true);

  const  hideModal= () => setVisible(false);







  return (
    <Portal>
    <Modal contentContainerStyle={{backgroundColor:'white'}} visible={visible} onDismiss={hideModal}>
    <View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:50,paddingTop:10}}>
    <Button  mode='contained' onPress={hideModal}>close</Button>
    <Button mode='contained' onPress={hideModal}>done</Button>
    </View>
    <DateTimePicker
    testID="dateTimePicker"
    value={date}
    mode='date'
    is24Hour={true}
    display="default"
    onChange={onChangeHandle}
    />
    </Modal>
   
  </Portal>
   
   
  
   
  
    
  );
}
