
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View ,Image,FlatList,
SafeAreaView} from 'react-native';

import MovieRender from '../components/MovieRender'
import {connect} from 'react-redux'

class HomeScreen extends React.Component {
  //const [movies,setMovies] = useState([]);
  
  // const fetchData = async () => {
  //   const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=69938bebfb176098af2131f041f0f817&language=en-US&page=1') 
  //   res.json()
  //   .then(res => setMovies(res.results))
  //   .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   fetchData();
  // })
  render(){
    const {movies} = this.props;
    return (
    <View style={styles.container}>
      <SafeAreaView>
      <Text style={{fontSize:23,textAlign:"center",paddingTop:20,paddingBottom:20,fontWeight:"bold",color:'#0693ee'}}>LIST MOVIES</Text>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({item}) => <MovieRender movie={item}/>}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      </SafeAreaView>
      
    </View>
  );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20
    
  },
});

const mapStateToProps = (state) => {
  return {
    movies: state
  }
}

export default connect(mapStateToProps)(HomeScreen)