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

import {View, StyleSheet, Button, Alert} from 'react-native';
import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA } from "./constants";
import { SET_QUOTES_DATA } from "./constants";
/* 
since we require type of Action name from constant file we will import constant file.

*/

const initialState=[];





export const reducer = (state=initialState,action) =>{
    /* 
    
    Here state inside syntax 'export const reducer = (state=initialState,action)=>{}' contains all the data which we have written for each mobile type inside array of products which we have written inside App.js
    
    */
    switch(action.type){
        case ADD_TO_CART:
            alert('Old state data is: '+JSON.stringify(state)+'\n'+'New data which is added inside state of Redux store is:'+JSON.stringify(action.data));
            
            /* var newState=[...state];
            newState.push(action.data);
            return newState; */
            
             return[...state,action.data] 

            /* 
            Ref of why we use ... i.e. spread operator in Redux return: https://www.youtube.com/watch?v=cYHzaj3_g_s 
            
            
            Here in case ADD_TO_CART we are doing three steps i.e. 
            
            1. var newState=[...state];

            This step will do: when we write [...state] then whatever array data is present inside state array will be iterated one by one and passed to newState variable, so now we have a clone of state array whose name is newState. 
            
            if we do not use ... i.e. spread operator to make a clone of our existing array i.e. state i.e. if we do not use ... spread operator to make a copy of our existing array state with a new array name newState, then second option to do is to use if() loop or manually we have to iterate each single index value of state array and push inside newState array,
            
            See this link to find how to make an array copy : https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/ 

            In this ref also first and best method to make an array copy is to use spread operator and then there are more 9 methods using which we can make a copy of array manually using for loop or while loop i.e. manually doing iterations.
            
            
            
            And since we have written ...state with square brackets which is symbol of array in javascript, so newState will also become an array and all the data which was present inside state array will now be copied inside new array whose name is newState.

            2. Then we wrote 'newState.push(action.data);' 

            This step will push new Mobile device data which we want to add in the newState array as action.data will contain latest mobile device data which we want to add inside our cart, but note that this push will not add our new Mobile device data inside our old array i.e. inside state array,  only our new array i.e. newState will get new Mobile device data pushed inside it.

            3. Last we will return newState;

            By doing this we will send the full data which we have stored inside newState array to our Redux store. 

            So to avoid writting this all three steps seperately javascript have another syntax of single line which is:

            return[...state,action.data]

            This one line syntax will do the same work as done in the previous three steps.




             
            
            */

        case REMOVE_FROM_CART:
            let result=state.filter(item=>{
                return item.name!=action.data
            })
            return[...result,]

                
            /* 
            Spread operator is use to iterate an array. So when we will return[...result] then we are telling that result is an array and it contains more than one value so return whatever is inside result by iterating index by index. 

            return[...result,] This syntax is telling that in result array there are not single value but the result is containing multiple values inside array, and so 

            Spread syntax (...)

            The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places 
            

            Refere : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
            
            https://www.youtube.com/watch?v=ysQFRsYv5VM&t=586s  
            
            https://www.youtube.com/watch?v=_BsE5kmJk6Q     

            */

            


            default:
                return state
                //return null
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