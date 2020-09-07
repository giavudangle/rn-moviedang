
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, Image, FlatList,
  SafeAreaView,Dimensions,  RefreshControl,ScrollView
} from 'react-native';


import Loading from '../components/common/Loading'
import MovieRender from '../components/MovieRender'
import { connect } from 'react-redux'

import {fetchList,refreshControl} from '../actions/movieActions'

const {width,height} = Dimensions.get('screen');


class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      page : 1
    }
  }

  componentDidMount(){
    this.props.fetchListMovies(this.state.page);
  }

  _handleLoadMore =  () => {
    this.setState({page:this.state.page + 1},() => {
      this.props.fetchListMovies(this.state.page)
    })
  }

  _handleLoading = () => {
    if(!this.props.loading) return null;
    return <Loading/>
  }

  _handleRefresh = () =>  {
    return this.props.refreshControl;
  }

  
  
  render() {
    const {navigation,loading}=this.props;   
    
    return (
      <SafeAreaView style={styles.container}>
        <View
        style={{flex:10/10}} 
        >
          <Image style={{marginBottom:10,width:width/2,height:height/16,overflow:"hidden",alignSelf:'center'}} source={require('../utils/logo.png')}/>
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}          
            data={this.props.movies}
            renderItem={({ item }) => <MovieRender navigation={navigation}  movie={item} />}
            keyExtractor={(item,index) => index.toString()}
            showsVerticalScrollIndicator={false} 
            ListFooterComponent={this._handleLoading}      
            onEndReachedThreshold={5}   
            onEndReached={this._handleLoadMore}   
            refreshing={this.props.refreshing}
            onRefresh={this._handleRefresh}
          />
        </View>
       
    
      </SafeAreaView>
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
    movies: state.moviesReducer.movies,
    loading: state.moviesReducer.loading,
    refreshing: state.moviesReducer.refreshing
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListMovies: (page) => {
      dispatch(fetchList(page))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)