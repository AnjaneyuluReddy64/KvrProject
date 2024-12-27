import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';

import One from '../Screens/Modules/ModuleFour/One';
import Two from '../Screens/Modules/ModuleFour/Two';
import Three from '../Screens/Modules/ModuleFour/Three';
import Home from '../Screens/MainScreens/Home';
import Post from '../Screens/MainScreens/Post';
import Profile from '../Screens/MainScreens/Profile';
import Settings from '../Screens/MainScreens/Settings';
import DrawerScreen from '../Screens/DrawerScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="Three" component={Three} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Drawer Navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Post" component={Post} />
      <BottomTabs.Screen name="Profile" component={Profile} />
      <BottomTabs.Screen name="Settings" component={Settings} />
    </BottomTabs.Navigator>
  );
};

export default Routes;
