import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width,height} = Dimensions.get('screen');




export default MovieRender = ({movie,navigation}) => {
  const[color,setColor] = useState('gray');
  return(
    <TouchableWithoutFeedback
     onPress={() => navigation.navigate('DetailMovie',movie)}
    >
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.poster} source={{uri:`https://image.tmdb.org/t/p/original` + `${movie.poster_path}`}}/>
        </View>
        <View style={styles.titleContainer}>
          <Text  style={styles.title}>{movie.title}</Text>
        </View>  
        <View  style={styles.iconContainer}>
        <TouchableWithoutFeedback 
          onPressIn={() => setColor('red')}
          onLongPress={() => setColor('gray')}
        >
        <Icon name='heart' size={28} color={color}/>    
        </TouchableWithoutFeedback>
           
        </View>    
    </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',  
    justifyContent:'space-between',
    paddingLeft:5,
    paddingHorizontal:30
    
  },
  imageContainer:{
    paddingLeft:-20,
    
  },
  poster:{
    height:100,
    width:60,
    resizeMode:'contain'
  },
  titleContainer:{
    marginRight:20,
    width:width/2,
    justifyContent:"center"

  },
  title:{
    fontSize:15,
    fontWeight:'bold',
    paddingLeft:10,
    textAlign:"center",
    
    
  },
  iconContainer:{
    paddingRight:10,
    alignItems:"center",
    justifyContent:"center"
  }

 
})
