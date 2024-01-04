/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { combineReducers } from "redux";
import { reducer } from "./reducerAKAWaiter";
import { reducerForQuotes } from "./reducerWaiterForQuotes";

/* 
Do not change reducer word from here as it is taken from file reducerAKAWaiter

*/
export default combineReducers({
    counterReducerKey:reducer,
    quotesReducerKey:reducerForQuotes,
    
})