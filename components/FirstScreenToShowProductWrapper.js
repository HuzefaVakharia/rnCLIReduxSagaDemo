/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import Header from './Header';
import Product from './Product';







// create a component
const ProductWrapper = ({navigation}) => {

const [hide,setHide]=useState(false);



const products=[
{
  name:'Samsung Mobile',
  color:'White',
  price:30000,
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PDY9qOXpjWt82tPXXWXSP8kBytvnnam9kA&usqp=CAU'
},
{
  name:'Oppo Mobile',
  color:'Green',
  price:35000,
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PDY9qOXpjWt82tPXXWXSP8kBytvnnam9kA&usqp=CAU'
},{
  name:'Nokia Mobile',
  color:'Yellow',
  price:40000,
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PDY9qOXpjWt82tPXXWXSP8kBytvnnam9kA&usqp=CAU'
},
]



  return (
    <View style={styles.container}>


    {/* 
    This is the first screen which we will show when our rnCLIReduxSagaDemo app will start. This screen contains three main things.

    1. At top there is a button with label 'Go To User List' which is to go to page using navigation which will fetch API data using saga concept and display fetched data.

    2. Second thing this file contains is <Header/> tag which will call Header.js file inside our FirstScreenToShowProductWrapper.js file, this Header file will show us how many Mobile devices added inside cart.

    3. Third thing is calling of Product.js file UI for each single index of data for product array, so in our FirstScreenToShowProductWrapper.js we will see all our Products of Mobile Device listed with good UI which is set inside Product.js file.

    So this means that this file FirstScreenToShowProductWrapper.js will contain all the things which we want to show in our page of buying any product in any app and more over there is a navigation button also with name 'Go To User List' which is able to change the screen or file. So if we are creating any large app, we can have initially a landing page for our app, from that landing page we can give one button which will open this page to buy products like page FirstScreenToShowProductWrapper.js and from this FirstScreenToShowProductWrapper.js we can give a button with name 'Proceed for Payment' same like 'Go To User List' where we can ask user for payment card details.  
    
    
     */}


     {/*
     Section for button with label 'Go To User List' which is to go to page using navigation which will fetch API data using saga concept and display fetched data starts here.
      */}
    
    
    <Button title='Go To User List' onPress={()=>{
      navigation.navigate("User");
      //setHide(true);
      }}/>
    
    
    
     {/*
     Section for button with label 'Go To User List' which is to go to page using navigation which will fetch API data using saga concept and display fetched data ends here.
     
       */}
    





{/* 
Section for <Header/> tag which will call Header.js file inside our FirstScreenToShowProductWrapper.js file, this Header file will show us how many Mobile devices added inside cart starts here.

 */}




    {hide==false? <Header/>:null }
    
    
    
    
    
{/* 
Section for <Header/> tag which will call Header.js file inside our FirstScreenToShowProductWrapper.js file, this Header file will show us how many Mobile devices added inside cart ends here.
 */}    
    
    
    
    {/* 
    Section for calling of Product.js file UI for each single index of data for product array starts here.
    
    */}
    
   {hide==false?  
    
    <ScrollView>
    {
      products.map((item)=><Product itemPropsLabel={item}/>)
      
    }
    </ScrollView>:null }

    {/* 
    Section for calling of Product.js file UI for each single index of data for product array ends here.
    
     */}








    {/* 
    Here using above syntax 


    'products.map((item)=><Product itemPropsLabel={item}/>)' 
    

    we will fetch single single index data bunch from products array using map() function and for each single products array index bunch data we will call Product.js file using <Product> tag and after calling Product.js file we will also pass single index bunch of data to this Product.js file using props concept with props label name itemPropsLabel, and using this props label name itemPropsLabel this single index data bunch will be fetched in Product.js file.

    Once the itemPropsLabel data will be extracted inside Products.js file, we will see all the return UI which is written inside Product.js file for each single products array index data. 

    And since we have mentioned our ProductsWrapper.js file inside our navigation tag inside App.js first file, so we will always see our ProductWrapper.js file first of all when we will start our app. So our app flow will be like this

    App opened->ProductWrapper.js file seen->ProductWrapper.js file is calling Product.js file inside itself so Product.js file seen->Product.js file will contain Add To Cart button inside it, so we will see Add To Cart button from Product.js file->when we will click on Add To Cart button from Product.js file then our actionAKAManager.js file will be called using disptach() function->actionAKAManager.js file will then assign single Mobile device data bunch and action type name to reducerAKAWaiter.js file->reducerAKAWaiter.js will then add send Mobile device data from actionAKAManager.js file to our redux centralized maintained array->then reducerAKAWaiter.js will send its function whose name is 'reducer' in this project of rnCLIReduxSagaDemo to rootReducerForHoldingMultipleReducers.js file and then->rootReducerForHoldingMultipleReducers.js file will registered inside storeForHoldingOUtDataCentrally.js configureStore() function.  And this storeForHoldingOUtDataCentrally.js is available to whole app because we have wrapper our <App/> inside <Provider store={myStore}><App/></Provider> where myStore is the const which is being exported from storeForHoldingOUtDataCentrally.js file and this const myStore contains our returned data from our configureStore() function. 
    
      
     */}
      
      
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ProductWrapper;