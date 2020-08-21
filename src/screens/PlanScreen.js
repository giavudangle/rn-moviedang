import React,{useState} from 'react'
import { View, Text ,ScrollView,TouchableOpacity} from 'react-native'
import {Calendar,CalendarList,Agenda} from 'react-native-calendars'
import { SafeAreaView } from 'react-native-safe-area-context';
import { material } from 'react-native-typography'
import { Avatar, Card } from 'react-native-paper'
import Ant from 'react-native-vector-icons/AntDesign';


export default function  PlanScreen({navigation}) {

  const [items,setItems] = useState({})

  const randomName = () => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < charactersLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result[0];  
  }

  const renderItem = (item) => {
    return(
      <TouchableOpacity>
        <Card>
          <Card.Content>
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
              <Text style={[material.subheading]} >{item.name}</Text>
              <Avatar.Text label={randomName()}/>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }

  const mock ={
    '2020-08-18': [{name: 'item 1 - any js object',height:0}],
    '2020-08-17': [{name: 'item 2 - any js object', height: 80}],
    '2020-08-21': [{name: 'item 2 - any js object', height: 80}],
    '2020-08-22': [{name: 'item 3 - any js object'}, {name: 'any js object'},{name: 'any js object'}]
  }
 
  const mockLoading = (item) => {
      const newItems = {};
      Object.keys(mock).forEach(key => {newItems[key] =mock[key];});
      console.log(newItems)
      setItems(newItems)
  }

  const _handleAddPlan = () =>{
    navigation.navigate('AddPlan')
  }

  return (
    <SafeAreaView>
    <ScrollView>
    <Ant onPress={_handleAddPlan} style={{alignSelf:'flex-end',paddingHorizontal:10,paddingVertical:10}} 
    name='pluscircleo' color='#34aeeb' size={30}/>
      <Agenda   
      items={items}
      loadItemsForMonth={mockLoading}
      selected={'2020-08-22'}      
      renderItem={renderItem}
      />
   
    </ScrollView>
    </SafeAreaView>
  )
}

