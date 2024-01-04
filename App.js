/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreenToShowProductWrapper from './components/FirstScreenToShowProductWrapper';
import UserList from './components/UserList';



const Stack=createNativeStackNavigator();


// create a component
const App = () => {






  return (
    <NavigationContainer>
    
    <Stack.Navigator>
    
    <Stack.Screen name='Home' component={FirstScreenToShowProductWrapper}/>
    <Stack.Screen name='User' component={UserList}/>
    </Stack.Navigator>    
    
      
      
    </NavigationContainer>
  );
};



//make this component available to the app
export default App;