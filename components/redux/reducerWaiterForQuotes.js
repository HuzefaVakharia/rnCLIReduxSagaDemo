/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */




/* 
Redux Slices​

A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.



Here in this project we are not using slice file, and instead of using slice we are using switch case to perform our action based on action.type,


Now let me tell you what is there in slice. 
When we will use slice concept in our project, we will call our required reducer based on name of that particular reducer, as we have used concept of slice in our DoctorApp, there we can have multiple reducers with different names to perform different task on single data which is kept centralized in project and all these multiple reducers are kept in single slice file with different names of reducers so we can call particular reducer when we want to perform particular task on centralized data.


But since in this project we are not using concept of slice, so here also we have multiple task which will be performed on single data which is kept centralized in our project, but we will create one reducer and we will differentiate our required task to be done by this single reducer based on action name i.e action.type. So based on the name of action whenever our reducer will be assigned some task by our Action component or say Action file, then based on the action name that single reducer will perform different task and return different kind of output and this will be done using switch case, whatever action name will be passed by Action file, while calling reducer, the reducer will check that action name i.e. action.type from switch case and based on this switch case result, we will get output i.e. return from our reducer file. 


*/


//import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA } from "./constants";
import { SET_QUOTES_DATA, SET_USER_DATA } from "./constants";
/* 
since we require type of Action name from constant file we will import constant file.

*/

const initialState=[];





export const reducerForQuotes = (state=initialState,action) =>{
    /* 
    
    Here state inside syntax 'export const reducer = (state=initialState,action)=>{}' contains all the data which we have written for each mobile type inside array of products which we have written inside App.js
    
    */
    switch(action.type){

      case SET_USER_DATA:
        return[
            ...state,
            action.data
        ]
        


                case SET_QUOTES_DATA:
                    return {
                      ...state,
                      quotes: action.data,
                    };


            default:
                return {
                    ...state,
                    quotes: [],
                  };
    }
};



/* To know why we have to use curly brackets {} in case of SET_QUOTES_DATA in reducerWaiterForQuotes.js file and why we use square brackets [] in switch case return for case ADD_TO_CART in reducerAKAWaiter.js file in project of rnCLIReduxSagaDemo for Redux Saga. :

Since {} represents an object in javascript which have key value pair structure, so when we want to give quotes:action.data, we can not use [] symbol for return.

Example of object declaration in javascript: 

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

see reference of how to create object in javascript from this link: https://www.w3schools.com/js/js_object_definition.asp 





And [] symbol is use to represent array and in javascript array do not use key value pair structure. 

Example of Array in javascript: const cars = ["Saab", "Volvo", "BMW"];

see reference of how to create an Array in javascript from this link: https://www.w3schools.com/js/js_arrays.asp 

 
*/