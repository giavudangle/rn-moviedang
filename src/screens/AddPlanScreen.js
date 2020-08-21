import React,{useState} from 'react'
import { View, Text,SafeAreaView,StyleSheet,Button } from 'react-native'
import { material } from 'react-native-typography'
import TextInputCustom from '../components/common/TextInputCustom'
import ButtonCustom from '../components/common/ButtonCustom';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function AddPlanScreen() {
  const _handleCreatePlan = () =>{
    console.log('ok');
  }

  const [plan,setPlan] = useState('');
  const [note,setNote] = useState('');
  //const [date,setDate] = useState('');
  const [movie,setMovie] = useState({});
  const [theater,setTheater] = useState([]);
  const [friend,setFriend] = useState({});

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const _handleDatePicker = () => {
  
    return (
      <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
         
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        
      </View>
    );
  
  }

  return (   
    <SafeAreaView style={styles.container}>
  
      <Text style={{alignSelf:'center',fontSize:30,paddingLeft:30,paddingVertical:30}}>NEW PLAN</Text>
      <TextInputCustom onChangeTextHandle={(text) => setPlan(text)} name='dots-vertical' place='Plan name'/>
      <TextInputCustom onChangeTextHandle={(text) => setNote(text)} name='notebook-outline' place='Note'/>   
      <TextInputCustom name='calendar' onTouchHandle={_handleDatePicker} place='Date & Time'/>
      <TextInputCustom onTouchHandle={() => console.log('tocuh')}  name='movie' place='Select Movie'/>
      <TextInputCustom  name='theater' place='Select Theather'/>
      <TextInputCustom  name='account-plus' place='Select Friend'/>
      <ButtonCustom onPressHandle={_handleCreatePlan} title='Create'/>

      <ButtonCustom onPressHandle={_handleDatePicker} title='Create'/>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20
  }
})
