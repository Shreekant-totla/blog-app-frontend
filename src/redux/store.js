
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Auth/reducer'; 
import blogReducer from './Blogs/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
