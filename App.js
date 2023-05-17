import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
//ta2
import HomeScreen from "./screens/Home";


const Stack=createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;