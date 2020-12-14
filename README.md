# MOVIEDANG 
<div style='display:flex;justify-content:space-between;align-items:center;flex-direction:column'>
  <div>
    <a href="https://github.com/giavudangle/movies-redux-example"><img style='margin-bottom:30' src="https://i.ibb.co/DfdnQ6P/moviedang.png" alt="moviedang" border="0"></a>
  </div>
  <div>
    <p align="right|center">
  <a href="https://github.com/facebook/react-native/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native is released under the MIT license." />
  </a>
 
  <a href="https://www.npmjs.org/package/react-native">
    <img src="https://badge.fury.io/js/react-native.svg" alt="Current npm package version." />
  </a>
  <a href="https://reactnative.dev/docs/contributing">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  
</p>
  </div>

</div>


  ## Install Project
  ```
  yarn install
  cd ios
  pod install
  cd ..
  yarn ios || yarn android
  ```        
  ## Pull Request are welcome ^^ - Happy coding </>

  # Screen Boilerplate
  <div>
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914190/small_119115708_351068646031033_4541522725677316172_n_88a9f035fb.jpg?49841.159999999945" alt="PRs welcome!" />
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914189/small_119315284_3389626361113132_7026334592899254701_n_fef6d8b80b.jpg?49841.920000000755" alt="PRs welcome!" />
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914189/small_119055187_935051533652032_337964872884829872_n_048d32d9c2.jpg?49842.43500000048" alt="PRs welcome!" />
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914189/small_119088809_2272367636243092_1391283304310133929_n_173ec29b55.jpg?49843.92000000025" alt="PRs welcome!" />
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914189/small_119449174_642337853334986_3866066777282252335_n_440a5383d1.jpg?49844.39999999995" alt="PRs welcome!" />
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914186/small_119096885_349170862934749_1745981848977438978_n_8fe63cb8d8.jpg?49844.83" alt="PRs welcome!" />
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914186/small_119455785_1004350380035231_4037914016651990109_n_56a8862e3e.jpg?49845.24000000056" alt="PRs welcome!" />
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914185/small_119198151_770178180493114_3607850728848561280_n_7eaa61a807.jpg?49845.690000000104" alt="PRs welcome!" />
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914185/small_119085869_2739805953009883_8820109445373160085_n_3ac12e0f5d.jpg?49846.120000000155" alt="PRs welcome!" />
<img src="https://res.cloudinary.com/chemthan2202/image/upload/v1607914185/small_119218763_645432899706304_3249292824512421653_n_ee4b7b2a62.jpg?49846.54000000046" alt="PRs welcome!" />
  </div>


# <a href='http://redux.js.org'><img src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' height='60' alt='Redux Logo' aria-label='redux.js.org' /></a>

Redux is a predictable state container for JavaScript apps.
(Not to be confused with a WordPress framework – [Redux Framework](https://reduxframework.com/).)


[![build status](https://img.shields.io/travis/reduxjs/redux/master.svg?style=flat-square)](https://travis-ci.org/reduxjs/redux)
[![npm version](https://img.shields.io/npm/v/redux.svg?style=flat-square)](https://www.npmjs.com/package/redux)
[![npm downloads](https://img.shields.io/npm/dm/redux.svg?style=flat-square)](https://www.npmjs.com/package/redux)
[![redux channel on discord](https://img.shields.io/badge/discord-%23redux%20%40%20reactiflux-61dafb.svg?style=flat-square)](https://discord.gg/0ZcbPKXt5bZ6au5t)
[![Changelog #187](https://img.shields.io/badge/changelog-%23187-lightgrey.svg?style=flat-square)](https://changelog.com/187)

  ## Created by Vudang
  

  ## Redux Flow Architecture
  - 1.Khi View Layer bắn 1 Event - Event được chuyển đến Action
  - 2.Ứng với mỗi Action - thì nó sẽ dispatch function đó tới Reducers (Action Creator)
  - 3.Quá trình này có thể có SIDE-EFFECT (99% là GET API ^^ ) 
  -> Ta cần một thứ để handle Side Effect ở đây : Redux-Thunk,Redux-Sagas,redux-observable ...
    - 3.1 - Các side effect này có thể là để send request nhận APIs trên server về (RESFULApi)
    - 3.2 - Thunk hay Sagas giúp ta có thể xử lí các side effect này rồi sau đó mới dispatch action
    - 3.2 - Sau khi fetch api xong,data được đưa về Reducers để update state
  - 4.Trong reducers (gồm các case nếu dùng switch) để bắt action types của Action kèm payload(sẽ update với payload value)
  *Store là nơi bao bọc reducer *
  - 5.Sau khi state được update sẽ bắn về View Layer hoàn thành quá trình update lên Redux State Tree




  # I.Implement Redux in React-Native 
  ## 1.Structures 
  ```
    src
  |__ reducers
  | |__ auth.js
  | |__ task.js
  | |__ ... (one reducer per file)
  | |__ index.js (root reducer) -> Use combineReducers here ^^
  |
  |__ actions
  | |__ auth.js
  | |__ task.js
  | |__ ...
  |
  |__ screens
  | |__ HomeScreen/index.jsx (connect to redux) -> Use connect with stateful or useSelector - useDispatch
  |
  |__ store.js (reducers, init state, middlewares) -> Store all reducers with init state - make middlewares (Sagas,thunk) to call APIs
  |__ index.js (setup Store Provider) -> Wrap components here 
  ```

  ## 2.Import Libraries
    import {createStore} from 'redux' -> Dùng để tạo store chứa Reducers (vì có thể có rất nhiều Reducers)
    import {Provider} from 'react-redux' -> Dùng để pass state từ store xuống các components được wrapped trong cây Provider
    
  ##  3.Tạo Reducers - ta sẽ có rất nhiều Reducers nên mỗi Reducers sẽ nhét vào thư mục Reducers
    -> 1 file index ở reducers dùng hàm combineReducers để lấy hết tất cả reducers
    -> Ví dụ 1 reducers : 
    function moviesReducer(state = mockMoviesData.results ,action){
      console.log(state);
    return state;
    -> Reducers là 1 function, nhận vào 2 tham số là initialState và Action cần reduce
    -> Khi action gửi lên sẽ kèm payload cho reducers biết: đối với Action nào cần reduce với value là action.payload
    -> State trong reducer là Immutable ( đối với Array và Object) nên phải Clone trước khi muốn Update
  ## 4.Tạo Store - Store sẽ là nơi lưu trữ Reducers(rootReducer)
      const store = createStore(moviesReducers)   
  ## 5.Tạo middlewares - bất kỳ ở đây tôi dùng Thunk
    import thunk from 'redux-thunk'
    export default store = createStore(rootReducer,applyMiddleware(thunk));
  ## 6.Pass state xuống thông qua Provider
     export default () => { 
      return(
        <Provider store={store}>
          <MainNavigation/>
        </Provider>
      )
    }


  # II.Using Redux :D 
  
 - ##  I.Stateful
  - Nếu là Stateful (dạng Class Component) -> Dùng HOC -> connect()
  - Ví dụ : 
    - Ở HomeScreen import hàm connect của react-redux 
      ```
      import { connect } from 'react-redux'
      ```
    - Sau đó ta sẽ import Action Creators của Action cần dùng như sau :
      ```
      import {fetchList} from '../actions/movieActions'
      ```
    - Nếu muốn dùng state của Store như props trong component thì ta phải
      mapStateToProps: 
      Lúc này this.props.movies của chúng ta sẽ có movies là state của Redux Store
      ```
      const mapStateToProps = (state, ownProps) => {
        return {
          movies: state.moviesReducer.movies,        
        }
      }
      ```
    - Nếu muốn sử dụng dispatch action thành props trong component thì ta phải
      mapDispatchToProps:
      Lúc này this.props.fetchListMovies của chúng ta sẽ là action này
      ```
      const mapDispatchToProps = (dispatch, ownProps) => {
        return {
          fetchListMovies: (page) => {
            dispatch(fetchList(page))
          }    
        }
      } 
      ```
    - Việc dùng còn đơn giản hơn 
      ```
      componentDidMount(){
      this.props.fetchListMovies(); // Data get từ store về (fetch API)
       }
      ```


      
 - ## II.Stateless
  - Nếu là Stateless (dạng Functional Component) 
  -> Dùng các APIs của Hook : useSelector() và useDispatch()
  - Ví dụ :
    - Ở SearchScreen import hàm useSelector của react-redux và lấy state từ store như sau :
    ```
    import {useDispatch,useSelector} from 'react-redux'
    const movieSearch = useSelector(state => state.moviesReducer.searchMovies)
    ```
    - Muốn dispatch một action lên store thì sao ? như sau :
    ```
      const dispatch = useDispatch();
      const searchListMovies = (query) => {
        return dispatch(searchMovieWithName(query))
      }
    ```
  - Cách dùng đơn giản hơn so với connect rất nhiều. Nhưng sẽ có những behaviors khác nữa, trong project này tôi không cập nhật chi tiết ^^.
  - Happy coding </>


