/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries
import React,{useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {getUserList_Action} from './redux/actionManagerForQuotes'
import {ScrollView} from 'react-native-virtualized-view';

/* 
I think getUserList is not defined in actionAKAManager file


Read Nested array in saga: https://stackoverflow.com/questions/66652467/redux-saga-update-a-nested-array-of-object-state 

*/
// create a component


let resultfirst=[];

/* 

In this project problem is that data is getting fetched fully from dummy server at once but it is not shown fully at once inside FlatList, if i go back to previous screen and come again to UserList screen some more data gets inserted inside flatlist, 


second problem is that i do not know how to enter inside nested array so refer previous example with fetch() function usage of how to enter inside nested array.



*/

  const UserList = () => {
  
  const dispatch = useDispatch();
  //const userList=useSelector((state)=>state.reducer);<-------------This was correct for our project of rnCLIReduxSagaDemo 

  const quotesData=useSelector((state)=>state.quotesReducerKey.quotes);
/* The keyword .quotes inside above syntax i.e. '(state)=>state.reducer.quotes' is to access data fetched by reducer on api call using saga is stored with key quotes inside reducerAKAWaiter.js file */


/* 
When we use useSelector() function like this " const userList=useSelector((state)=>state.reducer);" then all the data including Mobile device added to cart and Saga data which is fetched using "dispatch(getUserList_Action());" inside useEffect() function will be given to const userList. This can be proved if we use an alert() inside useEffect() function like this:

useEffect(()=>{
    dispatch(getUserList_Action());

    alert('Mobile Data is--------------------------------------------->>>>>>>>>>>>>>:'+JSON.stringify(userList));
},[]);



As seen above when this page UserList.js will open the useEffect() hook function will execute and first of all it will dispatch an action using "dispatch(getUserList_Action());" and this action will tell action.js file that call saga and fetch api data from server, and after api data is being fetched it will also get stored inside store of redux system. Do to fetching this server data array our cart number also will increase to one because we are also fetching redux data inside Header.js using 

const cartData=useSelector((state)=>state.reducer);

and after this we will check the length of our cartData const like this :

useEffect(()=>{
setCartItems(cartData.length);
},[cartData])





Now understand the scenario here, if we start our app and if we add some Mobile device in our cart, then we click on "GO TO USER LIST" button from our ProductWrapper.js file, then the map function which we have used in this files i.e. UserList.js files FlatList will not work because our array of redux store should not contain data of our Mobile Device, just array data of our server should be present. 

So to avoid this scenario of our store containing both the data of our server and Mobile device added to cart, we have to create two different reducers to handle addition of our Mobile Device in one array and fetching server data using saga into different array, so that when we need only particullarly Mobile device added data from redux we can call its dedicated reducer and when we want to display server data fetched from saga, 




*/









/* 

Ref this to study syntax of useSelector() function: 


https://builtin.com/software-engineering-perspectives/useselector-usedispatch-react-redux


https://javascript.plainenglish.io/using-the-react-redux-useselector-hook-778b24d9f693


*/



  //let resultfirst;



  useEffect(()=>{
    dispatch(getUserList_Action());

    alert('Mobile Data is--------------------------------------------->>>>>>>>>>>>>>:'+JSON.stringify(quotesData?.length));



/*
This dispatch() action will call saga 

*/
  },[]);



  
  //console.warn("in component",userList);
  //alert('Data is:'+JSON.stringify(userList));

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainSubContainer}>

<Text style={styles.headerTitle}>Quotes</Text>
        
          <ScrollView>
            <FlatList
              keyExtractor={item => item.id}
              data={quotesData}
              renderItem={({item}) => (
               
                <View style={styles.cardContainer}>
                  <Text style={styles.quoteTitle}>{item.quote}</Text>
                  <Text style={styles.quoteAuthor}>{item.author}</Text>
                </View>
              )}
            />
          </ScrollView>
        
    
        {/* <FlatList
        numColumns={ 1 }
        
        data={ userList }
        showsVerticalScrollIndicator={ false }
        
        renderItem={ ({ item, index }) =>
        {
            
          return (

            <View>

{

item.users.map((x) =>{
  
  //resultfirst.push(x.firstName)
  resultfirst.push(x.id)
  
  
  })





}




 <Text style={{fontSize:18}}>FirstName{index}:{resultfirst[index]}</Text>
 
            </View>
          );
            } }
          /> */}


          






      
      
      {/* <Text>
      User List Screen
      </Text> */}
    </View>
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
  mainContainer: {
    backgroundColor: '#f1f1f1',
  },
  mainSubContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
    alignItems:'center'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6750A4',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    margin: 10,
    borderRadius: 6,
    elevation: 3,
  },
  quoteTitle: {
    fontSize: 18,
    color: '#454343',
  },
  quoteAuthor: {
    fontSize: 18,
    //color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#6750A4',
  },
});

//make this component available to the app
export default UserList;