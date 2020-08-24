"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = _interopRequireDefault(require("../actions/actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  movies: [],
  searchMovies: [],
  loading: false,
  refreshing: false,
  error: '',
  pickingMovies: []
};

var _default = moviesReducer = function moviesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes["default"].FETCH_LIST_MOVIES_REQUEST:
      return _objectSpread({}, state, {
        loading: true,
        refreshing: false
      });

    case _actionTypes["default"].FETCH_LIST_MOVIES_SUCCESS:
      return _objectSpread({}, state, {
        movies: action.payload,
        loading: false,
        refreshing: false
      });

    case _actionTypes["default"].FETCH_LIST_MOVIES_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload
      });

    case _actionTypes["default"].FETCH_LIST_MOVIES_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload
      });

    case _actionTypes["default"].REFRESH_LIST_MOVIES:
      return _objectSpread({}, state, {
        refreshing: false
      });

    case _actionTypes["default"].SEARCH_MOVIE_WITH_NAME_SUCCESS:
      return _objectSpread({}, state, {
        searchMovies: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

exports["default"] = _default;