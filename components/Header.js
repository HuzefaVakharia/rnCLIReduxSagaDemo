/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { useSelector } from 'react-redux';
// create a component
const Header = () => {
  
  
  //const cartData=useSelector((state)=>state.reducer);
  
  const cartData=useSelector((state)=>state.counterReducerKey);
  
  /* 
  
  The useSelector hook is used to extract the state of a component from the redux store using the selector function.
  
  */
  const [cartItems,setCartItems]=useState(0);
  //console.warn(cartData);

useEffect(()=>{
setCartItems(cartData.length);
},[cartData])

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,textAlign:'right', padding:10, backgroundColor:'orange'}}>
      <View style={{backgroundColor:"yellow",borderRadius:20,height:40,width:40}}>
      <Text style={{fontSize:25,textAlign:'center',}}>{cartItems}</Text>
    </View></Text>
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
export default Header;