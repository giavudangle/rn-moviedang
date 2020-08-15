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
  - 2.Ứng với mỗi Action - thì nó sẽ dispatch function đó tới Reducers
  - 3.Quá trình này có thể có Redux-Saga Middlewares
    - 3.1 - Sagas này có thể là để send request nhận APIs trên server về (restfulapi)
    - 3.2 - Các effects này được đưa về Reducers để update state
  - 4.Trong reducers (gồm các case nếu dùng switch) để bắt action types của Action kèm payload(sẽ update với payload value)
  *Store là nơi bao bọc reducer *
  - 5.Sau khi state được update sẽ bắn về View Layer hoàn thành quá trình update lên AT




  ## I.Implement Redux in React-Native 
  ### 1.Structures 
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

  ### 2.Import Libraries
    import {createStore} from 'redux' -> Dùng để tạo store chứa Reducers (vì có thể có rất nhiều Reducers)
    import {Provider} from 'react-redux' -> Dùng để pass state từ store xuống các components được wrapped trong cây Provider
    
  ### 3.Tạo Reducers - ta sẽ có rất nhiều Reducers nên mỗi Reducers sẽ nhét vào thư mục Reducers
    -> 1 file index ở reducers dùng hàm combineReducers để lấy hết tất cả reducers
    -> Ví dụ 1 reducers : 
    function moviesReducer(state = mockMoviesData.results ,action){
      console.log(state);
    return state;
    -> Reducers là 1 function, nhận vào 2 tham số là initialState và Action cần reduce
    -> Khi action gửi lên sẽ kèm payload cho reducers biết: đối với Action nào cần reduce với value là action.payload
    -> State trong reducer là Immutable ( đối với Array và Object) nên phải Clone trước khi muốn Update
  ### 4.Tạo Store - Store sẽ là nơi lưu trữ Reducers(rootReducer)
    const store = createStore(moviesReducers)
  ### 5.Pass state xuống thông qua Provider
      export default () => {
        return(
        <Provider store={store}> -> nhớ kèm Props store
          <HomeScreen/>
        </Provider>
        )
      }

  ## II.Using Redux :D 
  - I.Stateful
  - Nếu là Stateful (dạng Class Component) -> Dùng HOC -> connect()
  - Ví dụ : 
    - Ở HomeScreen import hàm connect của react-redux 
    
  II.Stateless
  - Nếu là Stateless (dạng Functional Component) -> Dùng các APIs của Hook : useSelector() và useDispatch()
        





