
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, Image, FlatList,
  SafeAreaView,Button,Dimensions
} from 'react-native';

import MovieRender from '../components/MovieRender'
import { connect } from 'react-redux'

import {fetchList} from '../actions/movieActions'
const {width,height} = Dimensions.get('screen');

class HomeScreen extends React.Component {

  constructor(props){
   super(props)
  }

  componentDidMount(){
    this.props.fetchListMovies();
  }
 
  render() {
    const { movies } = this.props;
    const navigation=this.props.navigation;
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Image style={{marginBottom:10,width:width/2,height:height/16,overflow:"hidden",alignSelf:'center'}} source={require('../utils/logo.png')}/>
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={movies}
            renderItem={({ item }) => <MovieRender navigation={navigation}  movie={item} />}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20

  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.moviesData.movies
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListMovies: () => {
      dispatch(fetchList())
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)