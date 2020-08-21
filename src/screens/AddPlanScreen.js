import React,{useState} from 'react'
import { View, Text,SafeAreaView,StyleSheet,Button } from 'react-native'
import { material } from 'react-native-typography'
import TextInputCustom from '../components/common/TextInputCustom'
import ButtonCustom from '../components/common/ButtonCustom';



export default function AddPlanScreen({navigation}) {
  const _handleCreatePlan = () =>{
    console.log('ok');
  }

  const [plan,setPlan] = useState('');
  const [note,setNote] = useState('');
  //const [date,setDate] = useState('');
  const [movie,setMovie] = useState({});
  const [theater,setTheater] = useState([]);
  const [friend,setFriend] = useState({});





  return (   
    <SafeAreaView style={styles.container}>
  
      <Text style={{alignSelf:'center',fontSize:30,paddingLeft:30,paddingVertical:30}}>NEW PLAN</Text>
      <TextInputCustom onChangeTextHandle={(text) => setPlan(text)} name='dots-vertical' place='Plan name'/>
      <TextInputCustom onChangeTextHandle={(text) => setNote(text)} name='notebook-outline' place='Note'/>   
      <TextInputCustom name='calendar' place='Date & Time'/>
      <TextInputCustom onTouchHandle={() => navigation.navigate('Home')}  name='movie' place='Select Movie'/>
      <TextInputCustom  name='theater' place='Select Theather'/>
      <TextInputCustom  name='account-plus' place='Select Friend'/>
      <ButtonCustom onPressHandle={_handleCreatePlan} title='Create'/>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20
  }
})
