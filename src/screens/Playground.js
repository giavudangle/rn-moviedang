import React, { Component } from 'react'
import { Text, View ,SafeAreaView,Button} from 'react-native'

export default class Playground extends Component {

  constructor(props){
    super(props);
    this.state ={
      page:1
    }
  }

   _handleCounterUp = () => {
    this.setState({page: this.state.page + 1})
  }
  

   _handleCounterDown = () => {
    this.setState({page:  this.state.page - 1})
  }

  
  render() {
    const {page} = this.state;
    return (
      <SafeAreaView>
        
        <Button title='Up' onPress={this._handleCounterUp}/>
        <Button title='Down' onPress={this._handleCounterDown}/>
        <Text>{page}</Text>
        

      </SafeAreaView>
    )
  }
}
