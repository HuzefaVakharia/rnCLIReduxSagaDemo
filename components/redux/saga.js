/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */


import {takeEvery, put} from 'redux-saga/effects';
import {USER_LIST, SET_USER_DATA} from './constants';

import { setQuotes } from './actionManagerForQuotes';



/* Our Worker function userList() defined below */


function* userList(){

/* 
Note that whenever we create any function inside saga.js file, then we have to put * after word function. This * is symbol for generator and iterator function and when we will use * our function will work like iterator just as we iterate our array to fetch each single index data one by one. See in google what is generator and iterator function in javascript for more understanding and answering any question related to it.


*/





//const url="https://dummyjson.com/user";<-----------------This is correct

const url="https://dummyjson.com/quotes";
let data =yield fetch(url);
 
/* 
yield is a keyword which is use in saga which works same as keyword 'wait' which we uses when we use asynchronous function in react native. Let me tell you what is asynchronous function. Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously.

Saga API calling is Asynchronous function. 


See this video to understand what is Asynchronous and synchronous function in javascript: https://www.youtube.com/watch?v=SWWl1o0LT1I 


See this video to understand what is meaning of saga is asynchronous function and why we have to use saga in redux to overcome disadvantage of Thunk middleware which is also used before to call API fetch when saga was not present : https://www.youtube.com/watch?v=5BhdnLe8U9s 


Redux saga is a kind of solution, but solution for what ?
Redux saga is a asynchronous function, i.e. when we use redux saga our flow of our application will not change when we call fetch api server data in between working of our redux system in our application. i.e. the flow of our redux system app working is like this

UI View->Action.js->Reducer.js->root-reducer.js->store.js->UI View.

So when we want to call any API data during working of above flow of our code, we will use redux saga which is asynchronous kind of API calling , i.e. when we will call redux saga using our Action.js file then also our regular flow of redux will not get disturb, and the flow of our redux app working will become like this:

UI View->Action.js->root-saga.js(containing takeEvery() function which will call fetch api method from saga.js file)->Saga.js(API Calling)->Reducer.js->root-reducer.js->store.js->UI View.



To know what is generator function in saga see this: https://www.youtube.com/watch?v=VIH_uJFOaXw 

To know all the functions of saga like put(), takeEvery() see this video:https://www.youtube.com/watch?v=GEmLKarWLJM 

and after that see this to see what is put(): https://www.youtube.com/watch?v=Zo_NXWP5Zdo&list=PLWwJRj72soFfa8PRzpXF44P-FZJYedj-E&index=7  


*/




data = yield data.json();

console.warn("Data dot users in saga file",data.quotes);




yield put(setQuotes(data.quotes));
/* 
This above syntax call style of using a action function name inside put() function i.e. 'put(setQuotes(data.quotes));' is our HERO AND DAY SAVER PROBLEM SOLVER SYNTAX, because when we do not create any action function and just pass action type name like this as shown below:

put({type:SET_USER_DATA,data})

then we can not write the name of inner array attribute like .quotes or .users which is require to fetch our inner array from our root array, and also if we use this syntax of directly passing action type name and data inside put() function, then when we will show our fetched data inside our flatlist then the data will be shown one one by again and again refreshing page like UserList.js by going back to FirstScreenToShowProductWrapper.js file using navigation and when we will again click on GO TO USER LIST button then again useEffect() hook will execute and our dispatch() function will execute and next data will be shown in our list, and this is not require , we require that full list of data which is fetched by saga api should be shown at once, so if we will use this syntax                   'put({type:SET_USER_DATA,data})' in which we will pass our action type name and data directly is not correct method, instead of this we have to make a function inside our action.js file and then pass that action name inside put() and that action function should take a parameter like 'data.quotes' which will solve both of the problem of 

1. fetching directly our required inner array from root array using dot operator like this data.quotes and
2. also once our data will be fetched by saga concept then when we will show it inside flatlist, then it will be displayed fully at once, no need to rerun the useEffect() hook and thus our required task is also achieved.  

*/


//yield put({type:SET_USER_DATA,data})<--------------------This is working but not correct method, read above comment fully

/* 



What do put() function do in saga?

put() function basically dispatch and action which is passed inside it. So when we will call put() function then we will pass two things inside it, first is compulsory and second is optional:

1. Event Name or say name of the required task which we want to do by calling put() function and second argument will be 
2. Data on which this event has to be done, or say data using which the required event will be completed.


Note that "SET_USER_DATA" event name or action name is not present in actionAKAManager.js file, it means that the action type name or actually saying event name which is to be used inside put() method is not require to be written inside action file of redux. But the SET_USER_DATA is present as a case inside switch case statement inside file reducerAKAWaiter.js, so when we will call put() function the flow of our app will be:

saga.js->reducer.js->root-reducer.js->store.js->UI View

So since after saga.js file comes reducer.js file, so we will not require to write our event name which we want to do inside action.js file, just we have to write that event required return things inside reducer so the reducer will return that things to root-reducer when we will call put() inside saga file.


Understand one another very important concept of using saga file also that it is not always require that we have to fetch API in our saga worker function like we have here in this project with name userList(), we can just use put() function inside saga worker function to perform our desired event by passing the type of that event and once our worker function will see put() function call then our control of our app will go to reducer.js file where the event type name should be present in switch case syntax, and that switch case return task will be then performed by our redux. But if we want to call API also inside our worker function of saga then it is also possible by using fetch() function and the real use of saga is this only to fetch data from server using API call.

To see the saga worker function without having fetch() function inside it see the video: https://youtu.be/Zo_NXWP5Zdo?list=PLWwJRj72soFfa8PRzpXF44P-FZJYedj-E 

or see image from my saved folder with name: G:\huzefaRNPro\OTHER THINGS EXCEPT VS PROJECT\Redux concept with saga\Simple Redux without saga architecture





We can use yield keyword with put() function, there is another option also where we can use another function instead of put() function and that function name is dispatch() but we can not use yield keyword with dispatch() function and as you know we are using a generator functions inside saga.js file, so yield keyword is use to iterate and pass the value of data one by one inside state of redux and so for this iteration yield keyword is used, and if we will not be able to use yield keyword with dispatch() function then usage of our generator function inside our saga file will be of no use, so we will use put() function with yield keyword instead of dispatch() function.



What is call() function in saga?

call() function in saga is use to call another function,just we did calling of post function  which is defined inside soceton.js file in our rnCLISagaAuthentication project.Also note that in rnCLISagaAuthentication project we are not fetching data from API server using fetch() method inside our saga worker function, but we are using AXIOS to fetch all our api requests, and this AXIOS API calling code is present in functions written inside soceton.js file, so from saga worker file we will call another functions kept inside another file named soceton.js and that functions will call our API request using AXIOS. 


For example see this syntax:

const auth = yield call(post, 'account/signup', payload);


*/


/*
This above put({type:SET_USER_DATA,data})  will send control from this saga file to reducer file i.e. reducerAKAWaiter.js where this reducer file contains a return statement to return data which is fetched from API call to store.js, and thus we have created chain of control transfer which is action->saga->reducer->store 


*/



//yield put({type:USER_LIST,nextdata})
//yield put({type:SET_USER_DATA,data})
}

/* yield means in simple language to produce something or to provide something.


What is yield in sagas?


Sagas are implemented as Generator functions that yield objects to the redux-saga middleware. The yielded objects are a kind of instruction to be interpreted by the middleware. When a Promise is yielded to the middleware, the middleware will suspend the Saga until the Promise completes.




What is put method in saga?



What is get and put method?

GET: Retrieves data from the server. Should have no other effect. PUT: Replaces target resource with the request payload. Can be used to update or create a new resource.

*/

 function* SagaData(){
yield takeEvery(USER_LIST,userList);


/*

why we have to use takeEvery() in saga?

In the above example, takeEvery allows multiple fetchData instances to be started concurrently. At a given moment, we can start a new fetchData task while there are still one or more previous fetchData tasks which have not yet terminated.

when from our UI View we will dispatch action using dispatch() method in which we will pass action function name and in that action function name the action type which will be return will be USER_LIST, then our watcher function will execute that takeEvery() function which will contain USER_LIST and the takeEvery() function always have two parameters, one is the constant name of action and another is the name of worker function which is here in this example 'userList', so once the takeEvery() function which will contain USER_LIST constant will start executing then takeEvery() function will call the worker function whose name is written in its second parameter and here it is userList, so now our userList() function will start executing and it will fetch our API,

Now there are two functions from which we can trigger our worker function i.e. userList() function:
1. takeEvery()
2. takeLatest()

When we want that the api should be called each time repeatedly and completely the number of times user clicks on a button which will dispatch() our action function from our UI File which will call saga file into picture, then in saga file we will use takeEvery().
This takeEvery() function will call API from our Interne and server the number of times we click on button to call API.

Understand one another very important concept of using saga file also that it is not always require that we have to fetch API in our saga worker function like we have here in this project with name userList(), we can just use put() function inside saga worker function to perform our desired event by passing the type of that event and once our worker function will see put() function call then our control of our app will go to reducer.js file where the event type name should be present in switch case syntax, and that switch case return task will be then performed by our redux. But if we want to call API also inside our worker function of saga then it is also possible by using fetch() function and the real use of saga is this only to fetch data from server using API call.

To see the saga worker function without having fetch() function inside it see the video: https://youtu.be/Zo_NXWP5Zdo?list=PLWwJRj72soFfa8PRzpXF44P-FZJYedj-E 

or see image from my saved folder with name: G:\huzefaRNPro\OTHER THINGS EXCEPT VS PROJECT\Redux concept with saga\Simple Redux without saga architecture 


So from above explanination we can say that we can build an application using saga which do not call API to fetch data from server, but we use put() function and pass a event name inside put() function which will then call reducer.js file which will perform our required task, if we are creating a counter app where we can click on single button many times and on each button click our takeEvery() function will trigger the worker function and this worker function will contain put() function inside it and this put() function will call reducer file which will increase the counter value by one, so in this kind of application takeEvery() function is used. In place of takeEvery() if we had used takeLatest() function then if user clicks on single button for more than one time then also our takeLatest() function will cancel previous execution of reducer file and only complete execution for last click and so our counter will only increase by one no matter how many times we click on increase counter value button.



But takeLatest() is also a function which will trigger worker function same as takeEvery(), but the difference is that when we will use takeLatest() function inside our watcher function to trigger our worker function which will call API then if user will click on a button more than once which will call dispatch() function which will contain action function to call saga file into picture then only the last time button clicked will be executed completly and the process of calling API which was started previously by clicking that button first time or second time will be canceled, so our API will not be fetched completely everytime the user clicks on button. This is the difference between takeLatest() and in takeEvery().


See this video to understand more: https://www.youtube.com/watch?v=GEmLKarWLJM 





Below is general syntax for takeEvery() function:

takeEvery(pattern, saga, ...args)?

Spawns a saga on each action dispatched to the Store that matches pattern.

    pattern: String | Array | Function - for more information see docs for take(pattern)

    saga: Function - a Generator function (Here in this file we have called userList generator function so that it will fetch data from server)

    args: Array<any> - arguments to be passed to the started task. takeEvery will add the incoming action to the argument list (i.e. the action will be the last argument provided to saga)



*/







} 

export default SagaData; 