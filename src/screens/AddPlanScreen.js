import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet ,Keyboard,TouchableWithoutFeedback} from 'react-native'
import TextInputCustom from '../components/common/TextInputCustom'
import ButtonCustom from '../components/common/ButtonCustom';
import DatePicker from '../components/DatePicker'
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector,useDispatch} from 'react-redux'

import {addPlan} from '../actions/planActions'

export default function AddPlanScreen({ navigation,route }) {
  const [plan, setPlan] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date());
  const [movie, setMovie] = useState({});
  const [theater, setTheater] = useState('');
  const [friend, setFriend] = useState('');
  const [show, setShow] = useState(false);

  const pickedMovie = useSelector(state => state.planReducer.pickingMovie)
  const dispatch = useDispatch();


  const onChangeHandle = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(currentDate)
    setDate(currentDate);
  }
  
  useEffect(() => {
    setMovie(pickedMovie);
  })
  


  const temp = () => {
    console.log('vao temp')
    const result = {
      plan:plan,
      note:note,
      date:date.toISOString().slice(0,10),
      movie:movie,
      theater:theater,
      friend:friend
    }
    dispatch(addPlan(result))
    navigation.goBack();
  }

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
          onTouchHandle={() => navigation.navigate('Picking')}
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
        <ButtonCustom onPressHandle={temp} title='Create' />

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
