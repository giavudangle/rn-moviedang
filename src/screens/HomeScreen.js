
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, Image, FlatList,
  SafeAreaView,Button
} from 'react-native';

import MovieRender from '../components/MovieRender'
import { connect } from 'react-redux'

import {fetchList} from '../actions/movieActions'

class HomeScreen extends React.Component {
  componentDidMount(){
    this.props.fetchListMovies();
  }
 
  render() {
    const { movies } = this.props;
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={{ fontSize: 23, textAlign: "center", paddingTop: 20, paddingBottom: 20, fontWeight: "bold", color: '#0693ee' }}>LIST MOVIES</Text>
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={movies}
            renderItem={({ item }) => <MovieRender movie={item} />}
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