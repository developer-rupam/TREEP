//import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './navigation/tabs';
/* importing screens here */
import {Home,Settings,Profile,Login,Register,Explore} from './screens';


/* Creating Stack for navigation to screen */
const Stack = createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName={"Home"}>
       <Stack.Screen name="Home" component={Tabs} />
       <Stack.Screen name="Settings" component={Tabs} />
       <Stack.Screen name="Profile" component={Tabs} />
       <Stack.Screen name="Explore" component={Explore} />
       <Stack.Screen name="Register" component={Register} />
       <Stack.Screen name="Login" component={Login} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}
//registerRootComponent(App);


