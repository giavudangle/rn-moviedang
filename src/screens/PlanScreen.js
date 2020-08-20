import React,{useState} from 'react'
import { View, Text ,ScrollView,TouchableOpacity} from 'react-native'
import {Calendar,CalendarList,Agenda} from 'react-native-calendars'
import { SafeAreaView } from 'react-native-safe-area-context';
import { material } from 'react-native-typography'

import { Avatar, Card, Title } from 'react-native-paper'
const current = new Date().toDateString();
export default function  PlanScreen() {
  const [items,setItems] = useState({});

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
              items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {newItems[key] =items[key];});
      setItems(newItems)
    }, 1000);
  }

  const renderItem = (item) => {
    return(
      <TouchableOpacity>
        <Card>
          <Card.Content>
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
              <Text style={[material.subheading]} >{item.name}</Text>
              <Avatar.Text label='V'/>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView>
    <SafeAreaView>
      <Agenda   
      items={items}
      loadItemsForMonth={loadItems}
      selected={'2020-05-16'}      
      renderItem={renderItem}
      />
    </SafeAreaView>
   
    </ScrollView>
  )
}

