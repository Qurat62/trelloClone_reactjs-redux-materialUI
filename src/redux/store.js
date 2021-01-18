
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { combineReducers } from "redux";
import listsReducer from './listsReducers';
const middleware=[thunk];
const initialState={};
const reducers=combineReducers({
    lists: listsReducer,
   
  });
const store=createStore
(reducers,
    initialState,
    composeWithDevTools
    (applyMiddleware(...middleware)));
export default store;


