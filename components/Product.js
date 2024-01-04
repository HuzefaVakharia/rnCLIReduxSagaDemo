/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, Image,Button, Text, StyleSheet, Alert} from 'react-native';
import { addToCart_Action, removeFromCart_Action } from './redux/actionAKAManager';


/* 
Since Whenever we press any button in Product page then we are ordering some work, and so whatever we will order will be first listned by restaurant's manager, and here manager is Action file, so since we have to use Action file inside Product file, we have to import action file and the action names which we have to use.

*/


/* 

To install navigation in this project we have used below three commands one by one:


1. npm install @react-navigation/native
2. npm install react-native-screens react-native-safe-area-context
3. npm install @react-navigation/native-stack

*/


import { useDispatch, useSelector } from 'react-redux';





// create a component
const Product = (props) => {
  const item=props.itemPropsLabel;

/* 

Here we have to extract our data which we got from prop using .item because from ProductWrapper.js the props is sent with name of item, see below syntax used inside ProductWrapper.js

<Product itemPropsLabel={item}/>

once we extract our bunch of data for single product with intention of adding to cart array of redux data using 'props.itemPropsLabel' we will put this single product bunch of data inside another const with name 'item'.

Now this item const will contain single product data in buch with attributes like name, price, color and image which we can extract using item.name, item.price, item.color etc. 

*/


  const dispatch=useDispatch();
  //const cartItems=useSelector((state)=>state.reducer);

  const cartItems=useSelector((state)=>state.counterReducerKey);
  /* 
  
  The useSelector hook is used to extract the state of a component from the redux store.

  Now very important concept is that:
  The useSelector() hook will run whenever an action is dispatched. So whenever we will click on Add To Cart button, then our function handleAddToCart() will be called and in this function handleAddToCart() there is dispatch() function executing, so after executing dispatch() function, the redux will automatically call useSelector() hook again and refresh its content data which is changed due to some action event done by calling dispatch() function. 
  
  */

  const [isAdded,setIsAdded]=useState(false);


  const handleAddToCart=(item)=>{
    //console.warn("Called handleAddToCart",item);
    dispatch(addToCart_Action(item));

  }



  const handleRemoveFromCart=(item)=>{
    console.warn("Called handleRemoveFromCart",item);
    dispatch(removeFromCart_Action(item.name));
  }

  /* useEffect(()=>{
    alert('cartItems fetched is:'+JSON.stringify(cartItems));
  },[]); */


  useEffect(()=>{

    //alert('CartItems is:'+JSON.stringify(cartItems)+'\n'+'CartItems Length is:'+cartItems.length);
    /* if(cartItems && cartItems.length){
      
      
      console.warn(cartItems.length);
      alert('CartItems is:'+JSON.stringify(cartItems)+'\n'+'CartItems Length is:'+cartItems.length);
      
      
      
      cartItems.forEach((element)=>{
        //console.warn(element);
        
        if(element.name===item.name){
          setIsAdded(true);
        }
      })
    } */


    let result=cartItems.filter((element)=>{
      //Alert.alert('Result length is:'+result.length);
      return element.name==item.name
        
        
      
      /* 
      element.name means single index data name which is fetched from our redux data which is stored centrally in array, means that when we will fetch our redux maintained centralized data array using 'const cartItems=useSelector((state)=>state.reducer);' and due to executing dispatch() function by adding new Mobile device in redux array using handleAddToCart() method then our full data array will come inside const cartItems after getting refreshed and due to our cartItems getting refreshed our this useEffect() hook will also execute which will then we will pick single single index from our array using our filter() inside element variable and we will compare the name attribute from that single index data bunch with the name attribute which we have got from props inside item, and that Mobile device data bunch will be moved into result variable if the name of our element.name will be equal to item.name and since this Product.js file deals with single single data index of each mobile device data from full array of products defined inside ProductWrapper.js file, then for that Mobile device data bunch will be passed into result array using filter() and if result array will get anything inside it, then the setIsAdded() useState will make isAdded const variable true and due to true we will display Remove From Cart button, and when we will click on Remove From Cart Button then our handleRemoveFromCart() will be called and inside handleRemoveFromCart() there is disptach() function executing, and due to execution of our dispatch() function and due to changes done in store data our  useSelector() hook will also execute automatically and refresh our cartItems, and due to refresh of our cartItems data our this useEffect() hook will execute and again our filter() function will check all name of element.name and item.name and if that Mobile Device data bunch is removed from our store then in element.name it will not come and due to this filter will not return any array inside result and our result variable which is holding our filtered array will also get overrite everytime when filter process will be performed and so our result.length will become 0 and we will again see Add To Cart button.
      */
    });
    //Alert.alert('Result length is:'+result.length);
    if(result.length){
      setIsAdded(true)
      //Alert.alert('Result length is:'+result.length);
      /* 
      When isAdded is true then we will see 'Remove From Cart' button 
      */
    }else{
      //Alert.alert('Result length is:'+result.length);
      setIsAdded(false)
      /* 
      When isAdded is false then we will see 'Add To Cart' button 
      */
    }
    },[cartItems]);


 
    /* 
    This above useEffect will only execute when there will be any change in cartItems, and we will know when the cartItems is getting change using this syntax used above -> 'const cartItems=useSelector((state)=>state.reducer);'


    Now let us understand how we are changing the button from Add To Cart to Remove from Cart Label.

    in our Product.js we have used 'const cartItems=useSelector((state)=>state.reducer);'

    useSelector accepts a selector, a function which computes a value from state; when that value changes, the component will re-render

    What is a selector in Redux?
A "selector function" is any function that accepts the Redux store state (or part of the state) as an argument, and returns data that is based on that state. Selectors don't have to be written using a special library, and it doesn't matter whether you write them as arrow functions or the function keyword.

     So due to useEffect hook that we have used and we have passed cartItems inside condition of it to execute repeatedly when there is any changes inside const of cartItems, so when we will add new product from our cart list inside our redux state array then this useEffect will run and it will filter() and create new array with name of result     
    
    */



  return (
    <View style={{alignItems:'center', borderBottomColor:'orange', borderBottomWidth:2, padding:10}}>
        <Text style={{fontSize:24}}>{item.name}</Text>
        <Text style={{fontSize:24}}>{item.price}</Text>
        <Text style={{fontSize:24}}>{item.color}</Text>
        <Image style={{width:100,height:100}} source={{uri:item.image}}/>
        
        
       {
        isAdded?  
        <Button title='Remove From Cart' onPress={()=>handleRemoveFromCart(item)}/>:
        <Button title='Add To Cart' onPress={()=>handleAddToCart(item)}/>
      
      } 
      
      
      </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Product;