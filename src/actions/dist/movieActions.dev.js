"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchMovieWithName = exports.refreshListMovie = exports.fetchList = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* Get API List Movies */
var fetchList = function fetchList(page) {
  var urlString = "https://api.themoviedb.org/3/movie/now_playing?api_key=69938bebfb176098af2131f041f0f817&language=en-US&page=".concat(page);
  return function (dispatch) {
    dispatch({
      type: _actionTypes["default"].FETCH_LIST_MOVIES_REQUEST
    });
    return fetch(urlString).then(function (res) {
      return res.json();
    }).then(function (json) {
      return json.results;
    }).then(function (data) {
      return dispatch({
        type: _actionTypes["default"].FETCH_LIST_MOVIES_SUCCESS,
        payload: data
      });
    })["catch"](function (err) {
      return err.message;
    });
  };
};

exports.fetchList = fetchList;

var refreshListMovie = function refreshListMovie() {
  return function (dispatch) {
    dispatch({
      type: _actionTypes["default"].REFRESH_LIST_MOVIES
    });
    return fetchList(1);
  };
};

exports.refreshListMovie = refreshListMovie;

var searchMovieWithName = function searchMovieWithName(query) {
  var url = "https://api.themoviedb.org/3/search/movie?api_key=69938bebfb176098af2131f041f0f817&language=en-US&query=".concat(query, "&page=1&include_adult=false");
  return function (dispatch) {
    return fetch(url).then(function (res) {
      return res.json();
    }).then(function (json) {
      return json.results;
    }).then(function (data) {
      return dispatch({
        type: _actionTypes["default"].SEARCH_MOVIE_WITH_NAME_SUCCESS,
        payload: data
      });
    });
  };
};

exports.searchMovieWithName = searchMovieWithName;