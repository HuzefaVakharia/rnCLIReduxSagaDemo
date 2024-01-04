/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */


import { configureStore } from "@reduxjs/toolkit";
import rootReducerForHoldingMultipleReducers from "./rootReducerForHoldingMultipleReducers";
import createMySagaMiddleware_ourChoiceForThisName from 'redux-saga';
import SagaData from "./saga";




/*To use Redux persist and AsyncStorage just uncomment this block and remove this line: i have to comment this block because Redux Persist is running correctly for the Counter value and Mobile device screen when added to cart, but when we click on 'Go to User List' button to call saga api, the counter is also incremented because we are using same reducer file for both increasing counter and calling for saga api, so when i click on 'Go to User List' button, and press back button from top header to see again the Mobile device screen this code is showing error of cartItem.filter, so if we want to use Redux persist in this project then just uncomment this block and do not click on 'Go to User List' button because this code require some correction of seperating reducer files for redux saga and for counter increment :



import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist' 

 const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }      
  
  let persistedReducer=persistReducer(persistConfig,rootReducerForHoldingMultipleReducers);  */

  import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist' 

 const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }      
  
  let persistedReducer=persistReducer(persistConfig,rootReducerForHoldingMultipleReducers);



/* 
reducer inside configureStore here is keyword from library so i think this should not be changed

*/
const sagaMiddleware=createMySagaMiddleware_ourChoiceForThisName();


const myStore=configureStore({
    //reducer:rootReducerForHoldingMultipleReducers,
    reducer:persistedReducer,
    /*To use Redux persist and AsyncStorage just uncomment this block and comment the line above this statement which is reducer:rootReducerForHoldingMultipleReducers and also remove this line:i have to comment this block because Redux Persist is running correctly for the Counter value and Mobile device screen when added to cart, but when we click on 'Go to User List' button to call saga api, the counter is also incremented because we are using same reducer file for both increasing counter and calling for saga api, so when i click on 'Go to User List' button, and press back button from top header to see again the Mobile device screen this code is showing error of cartItem.filter, so if we want to use Redux persist in this project then just uncomment this block and do not click on 'Go to User List' button because this code require some correction of seperating reducer files for redux saga and for counter increment : 
    
    
    reducer:persistedReducer, */
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run(SagaData);
export const persist_store = persistStore(myStore);
export default myStore;