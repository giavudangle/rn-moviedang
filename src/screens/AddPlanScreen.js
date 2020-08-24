import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { material } from 'react-native-typography'
import TextInputCustom from '../components/common/TextInputCustom'
import ButtonCustom from '../components/common/ButtonCustom';
import DatePicker from '../components/DatePicker'

import {useSelector} from 'react-redux'

export default function AddPlanScreen({ navigation,route }) {
 
  


  const [plan, setPlan] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date());
  const [movie, setMovie] = useState({});
  const [theater, setTheater] = useState([]);
  const [friend, setFriend] = useState();
  const [show, setShow] = useState(false);

  const e = useSelector(state => state.planReducer.pickingMovie)

  const _handleCreatePlan = () => {
    console.log('ok');
  }

  const onChangeHandle = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  }
  const _handlePickingMovie =  () => {
    navigation.navigate('Picking')
  }


  useEffect(() => {
    setMovie(e);
  })
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={{ alignSelf: 'center', fontSize: 30, paddingLeft: 30, paddingVertical: 30 }}>NEW PLAN</Text>
        <TextInputCustom
          onChangeTextHandle={(text) => setPlan(text)}
          name='dots-vertical'
          place='Plan name' />
        <TextInputCustom
          onChangeTextHandle={(text) => setNote(text)}
          name='notebook-outline'
          place='Note' />
        <TextInputCustom
          onTouchHandle={() => setShow(true)}
          onTouchEndHandle={() => setShow(false)}
          valueRef={date.toDateString()}
          name='calendar'
          place='Date & Time' />
        <TextInputCustom
          onTouchHandle={ _handlePickingMovie}
          name='movie'
          valueRef={movie.title}
          place='Select Movie' />
        <TextInputCustom
          onChangeTextHandle={(text) => setTheater(text)}
          name='theater'
          place='Select Theather' />
        <TextInputCustom
          onChangeTextHandle={(text) => setFriend(text)}
          name='account-plus'
          place='Select Friend' />
        <ButtonCustom onPressHandle={_handleCreatePlan} title='Create' />
      </View>
      <View style={styles.stuffContainer}>
        {show ? <DatePicker date={date} onChangeHandle={onChangeHandle} /> : null}
      </View>
    </SafeAreaView>
  )
}






const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1
  },
  formContainer: {
    flex: 7
  },
  stuffContainer: {
    flex: 3
  }
})
