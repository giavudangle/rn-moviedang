import React,{useLayoutEffect} from 'react'

import { View, Text,Image,StyleSheet,Dimensions, ScrollView ,SafeAreaView} from 'react-native';

import {Button} from 'react-native-paper'

const {width,height} = Dimensions.get('screen');

import Ant from 'react-native-vector-icons/AntDesign'


export default MovieDetailScreen = (props) => {
  const navigation = props.navigation;
  const movie = props.route.params;
  console.log(movie)


  const wp =() =>{
    return (<WebView source={{ uri: 'https://reactnative.dev/' }}></WebView>)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.imageContainer}>
        <Ant onPress={() => navigation.goBack()} style={styles.backButton} name='arrowleft' color='white' size={35}/>
        <Image style={styles.poster} source={{uri:`https://image.tmdb.org/t/p/original` + `${movie.backdrop_path}`}} />
      </View>
      <View style={styles.desContainer}>
        <Text style={{fontSize:34,color:'white',fontWeight:'bold'}}>{movie.title}</Text>
        <Text style={{fontSize:16,fontWeight:'300',color:'white',paddingTop:10,paddingBottom:2}}>Release Date: {movie.release_date}</Text>
        <Text style={{fontSize:16,fontWeight:'300',color:'white'}}>Vote: {movie.vote_average}/10 </Text>

        <Text style={{paddingTop:25,fontSize:30,color:'white',fontWeight:'bold'}}>Summary</Text>
        <Text style={{paddingTop:10,color:'white',fontSize:15}}>{movie.overview}</Text>
        <Button style={{shadowColor:'white',width:width/2,alignSelf:'center',marginTop:30,backgroundColor:'#2e2e2e'}} 
        icon='play' mode='contained' onPress={() =>  {}}
        >Trailer</Button>
        </View>
        
      </ScrollView>

    </SafeAreaView>
  )

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2e2e2e'
  },
  imageContainer:{
    flex:1,
    backgroundColor:'#2e2e2e',
    paddingTop:0
  },
  poster:{
    width:width,
    height:height/2.5,
    resizeMode:'stretch',
  },
  backButton:{
    position:"relative",
    top:height/15,
    left:width/20,
    zIndex:99
  },
  desContainer:{
    backgroundColor:'#2e2e2e',
    flex:1,
    paddingHorizontal:30,
    paddingVertical:50,
    marginTop:-30
 
  
  }
  
})