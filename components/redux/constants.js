/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */



export const ADD_TO_CART="add_to_cart";
export const REMOVE_FROM_CART="remove_from_cart";
export const USER_LIST="user_list";
export const SET_USER_DATA="set_user_data";
export const SET_QUOTES_DATA = 'set_quotes_data';


/* 
Note the concept of import in React Native and overall programming language:

The thing which is imported by some file can be written in that file itself, for example here we are exporting const action labels like 
'export const ADD_TO_CART="add_to_cart";' and in the file of actionAKAManager.js we are importing those labels to be used inside action functions which have two things in it, one is label of action i.e. action type and data on which some action will be done, so if we want we can remove 'import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST } from "./constants";' statement from actionAKAManager file and just write all these 'export const ADD_TO_CART="add_to_cart";' inside actionAKAManager file itself, but since these label of actions i.e. action name are used in two different files i.e. in reducerAKAWaiter.js file and in actionAKAManager file so we can put all thse action labels i.e. type name inside seperate file i.e. inside constants.js and import these const label name in both files. 

*/