/**
 * @format
 */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import myStore, {persist_store} from './components/redux/storeForHoldingOurDataCentrally';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';  

/*To use Redux persist and AsyncStorage and PersistGate just uncomment this block and remove this line, i have to comment this block because Redux Persist is running correctly for the Counter value and Mobile device screen when added to cart, but when we click on 'Go to User List' button to call saga api, the counter is also incremented because we are using same reducer file for both increasing counter and calling for saga api, so when i click on 'Go to User List' button, and press back button from top header to see again the Mobile device screen this code is showing error of cartItem.filter, so if we want to use Redux persist in this project then just uncomment this block and do not click on 'Go to User List' button because this code require some correction of seperating reducer files for redux saga and for counter increment : 


import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';  


*/





const AppRedux=()=>(
    <Provider store={myStore}>
     {/* To use Redux persist and AsyncStorage and PersistGate just uncomment this block and remove this line:i have to comment this block because Redux Persist is running correctly for the Counter value and Mobile device screen when added to cart, but when we click on 'Go to User List' button to call saga api, the counter is also incremented because we are using same reducer file for both increasing counter and calling for saga api, so when i click on 'Go to User List' button, and press back button from top header to see again the Mobile device screen this code is showing error of cartItem.filter, so if we want to use Redux persist in this project then just uncomment this block and do not click on 'Go to User List' button because this code require some correction of seperating reducer files for redux saga and for counter increment :
     
     
      <PersistGate persistor={persist_store}> */} 
      <PersistGate persistor={persist_store}> 
    <App/>
    </PersistGate>
   
   {/*  To use Redux persist and AsyncStorage and PersistGate just uncomment this block and remove this line:i have to comment this block because Redux Persist is running correctly for the Counter value and Mobile device screen when added to cart, but when we click on 'Go to User List' button to call saga api, the counter is also incremented because we are using same reducer file for both increasing counter and calling for saga api, so when i click on 'Go to User List' button, and press back button from top header to see again the Mobile device screen this code is showing error of cartItem.filter, so if we want to use Redux persist in this project then just uncomment this block and do not click on 'Go to User List' button because this code require some correction of seperating reducer files for redux saga and for counter increment :
   
   
   
   </PersistGate>
   </PersistGate>*/}
    </Provider>
)
AppRegistry.registerComponent(appName, () => AppRedux);
