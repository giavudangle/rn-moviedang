import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { View, SafeAreaView,Dimensions,StyleSheet,Button ,FlatList} from 'react-native'
import {TextInput,Title} from 'react-native-paper'
import Ant from 'react-native-vector-icons/AntDesign'
import { searchMovieWithName } from '../actions/movieActions'

import MovieRender from '../components/MovieRender';
import Loading from '../components/common/Loading'
import { ScrollView } from 'react-native-gesture-handler'
import MoviePickerRendering from '../components/MoviePickerRendering'

const {width,height } = Dimensions.get('screen');

export default function PickingMovieScreen({navigation}) {
  const movieSearch = useSelector(state => state.moviesReducer.searchMovies)
  const loading = useSelector(state => state.moviesReducer.loading)

  const dispatch = useDispatch();
  
 
  const searchListMovies = (query) => {
    return dispatch(searchMovieWithName(query))
  }

  const _handleLoading = () => {
    if(!loading) return null;
    return <Loading/>
  }

  if(loading) return <Loading/>



  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Title h1 style={{alignSelf:'center',fontWeight:'bold'}} >Search Movies</Title>
      <View style={styles.searchContainer}>
      <TextInput
       style={{width:width/1.2,height:height/20,textAlign:'center',paddingLeft:30,borderColor:'red'}} 
       label='Search anything ' mode='outlined'
        theme={{
          colors:{
            primary:'red',
            underlineColor:'transparent'
          }
        }}
        onChangeText={(text) =>searchListMovies(text) }
       />
      <Ant onPress={() => {}} style={{zIndex:99,right:40,top:4}} name='search1' size={30}/>    
      </View>
        <FlatList
            style={{paddingVertical:20}}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={movieSearch}
            renderItem={({ item }) => <MoviePickerRendering navigation={navigation}  movie={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => _handleLoading()}
            
          />
      </ScrollView>
      
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    
  },
  searchContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
})
