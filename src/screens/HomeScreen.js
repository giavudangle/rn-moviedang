
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, Image, FlatList,
  SafeAreaView,Dimensions,  RefreshControl,ScrollView
} from 'react-native';
import {Button } from 'react-native-paper'


import Loading from '../components/common/Loading'
import MovieRender from '../components/MovieRender'
import { connect } from 'react-redux'

import {fetchList, refreshListMovie} from '../actions/movieActions'
import Types from '../actions/actionTypes'

const {width,height} = Dimensions.get('screen');





class HomeScreen extends React.Component {

  componentDidMount(){
    this.props.fetchListMovies(1);
  }



  constructor(props){
    super(props)
    this.page=1;
  }  


 
  _handleLoadMore = () => {
    this.page = this.page+1;
    this.props.fetchListMovies(this.page)
  }

  _handleLoading = () => {
    if(!this.props.loading) return null;
    return <Loading/>
  }

  _onRefresh = () =>  {
    return this.props.refreshControl();
  }
  
  render() {
    const navigation=this.props.navigation;
    
    if(this.props.loading){
      return <Loading/>;
    }
    return (
      <SafeAreaView style={styles.container}>
        <View
        style={{flex:9/10}} 
        >
          <Image style={{marginBottom:10,width:width/2,height:height/16,overflow:"hidden",alignSelf:'center'}} source={require('../utils/logo.png')}/>
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            extraData={this.props.movies}
            data={this.props.movies}
            renderItem={({ item }) => <MovieRender navigation={navigation}  movie={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false} 
            onScrollAnimationEnd={() => this._handleLoadMore()}
            ListFooterComponent={this._handleLoading}       
            refreshControl={<RefreshControl
              colors={["#9Bd35A", "#689F38"]}
              refreshing={this.props.refreshing}
              onRefresh={this._onRefresh.bind(this)}
              
              />}
            
          />
        </View>
        <View style={{flex:1/10,justifyContent:'center'}}>
          <Button onPress={() => this._handleLoadMore()} mode='contained' color='red'>LOAD MORE</Button>
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
    },
    refreshControl: () => {
      //dispatch({type:Types.REFRESH_LIST_MOVIES})
      dispatch(refreshListMovie())
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)