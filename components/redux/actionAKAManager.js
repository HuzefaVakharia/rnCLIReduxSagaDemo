/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */




/* 
For know what Action component or Action file is use for just see this video for very simple understanding: https://www.youtube.com/watch?v=4b8kdAWT4kY 

Action is a Manager, when we want to do some work, like say we went to any hotel and we are very big personality, so in our service the manager of hotel himself is standing so that our work is done very rapidly, so if we want to order something, then we will not call waiter, we will directly tell to Manager, and here Manager is Action file or Action component, the Action component ie. Manager will provide all the raw material which is required to fulfill our requirement to waiter and then tell whatever we ordered to his Waiter to bring, here Waiter is Reducer, i.e. Reducer is the actual person who will perform our desired task, but still we will not directly tell waiter to do something because we are VIP and so we want our work to be done fast, so we will directly contact hotel Manager, i.e. Action file. 


OFFICIAL DOCUMENT DEFINATION OF ACTION: Ref: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers 

Designing Actions

Actions are plain JavaScript objects that have a type field. As mentioned earlier, you can think of an action as an event that describes something that happened in the application.

In the same way that we designed the state structure based on the app's requirements, we should also be able to come up with a list of some of the actions that describe what's happening:

    Add a new todo entry based on the text the user entered
    Toggle the completed status of a todo
    Select a color category for a todo
    Delete a todo
    Mark all todos as completed
    Clear all completed todos
    Choose a different "completed" filter value
    Add a new color filter
    Remove a color filter

We normally put any extra data needed to describe what's happening into the action.payload field. This could be a number, a string, or an object with multiple fields inside.

The Redux store doesn't care what the actual text of the action.type field is. However, your own code will look at action.type to see if an update is needed. Also, you will frequently look at action type strings in the Redux DevTools Extension while debugging to see what's going on in your app. So, try to choose action types that are readable and clearly describe what's happening - it'll be much easier to understand things when you look at them later!

Based on that list of things that can happen, we can create a list of actions that our application will use:

    {type: 'todos/todoAdded', payload: todoText}
    {type: 'todos/todoToggled', payload: todoId}
    {type: 'todos/colorSelected', payload: {todoId, color}}
    {type: 'todos/todoDeleted', payload: todoId}
    {type: 'todos/allCompleted'}
    {type: 'todos/completedCleared'}
    {type: 'filters/statusFilterChanged', payload: filterValue}
    {type: 'filters/colorFilterChanged', payload: {color, changeType}}

In this case, the actions primarily have a single extra piece of data, so we can put that directly in the action.payload field. We could have split the color filter behavior into two actions, one for "added" and one for "removed", but in this case we'll do it as one action with an extra field inside specifically to show that we can have objects as an action payload.

Like the state data, actions should contain the smallest amount of information needed to describe what happened.


*/

/* 
Note the concept of import in React Native and overall programming language:

The thing which is imported by some file can be written in that file itself, for example here we are exporting const action labels like 
'export const ADD_TO_CART="add_to_cart";' and in the file of actionAKAManager.js we are importing those labels to be used inside action functions which have two things in it, one is label of action i.e. action type and data on which some action will be done, so if we want we can remove 'import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST } from "./constants";' statement from actionAKAManager file and just write all these 'export const ADD_TO_CART="add_to_cart";' inside actionAKAManager file itself, but since these label of actions i.e. action name are used in two different files i.e. in reducerAKAWaiter.js file and in actionAKAManager file so we can put all thse action labels i.e. type name inside seperate file i.e. inside constants.js and import these const label name in both files. 

*/

import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST, SET_QUOTES_DATA } from "./constants";
/* 
Note that since our Action file is going to assign whatever work we gave to Reducer file which will actually perform our required task, but here in Action file we do not require to import Reducer file, but since we require type of Action name from constant file we will import constant file.

Action functions are exported directly, so no need to put action functions inside another function.

*/

export function addToCart_Action(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
}



export function removeFromCart_Action(item){
    return{
        type:REMOVE_FROM_CART,
        data:item
    }
}






