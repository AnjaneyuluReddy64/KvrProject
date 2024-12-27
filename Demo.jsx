import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import StackTwo from '../Screens/ModuleFour/NavigationExamples/StackTwo';
import StackOne from '../Screens/ModuleFour/NavigationExamples/StackOne';
import DrawerOne from '../Screens/ModuleFour/NavigationExamples/DrawerOne';
import BottomOne from '../Screens/ModuleFour/NavigationExamples/BottomOne';
import BottomTwo from '../Screens/ModuleFour/NavigationExamples/BottomTwo';
import PropsExample from '../Screens/ModuleFour/StateManagement/PropsExample';
import ChildOne from '../Screens/ModuleFour/StateManagement/PropsExample/ChildOne';
import DemoRePratice from '../Screens/Demo/DemoRePratice';

// Navigation Types
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

// Stack Routes
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="DrawerNavigator"
        initialRouteName="DemoRePratice"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="StackOne" component={StackOne} />
        <Stack.Screen name="StackTwo" component={StackTwo} />
        <Stack.Screen name="PropsExample" component={PropsExample} />
        <Stack.Screen name="ChildOne" component={ChildOne} />
        <Stack.Screen name="DemoRePratice" component={DemoRePratice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Drawer Navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerOne {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 60},
      }}>
      <BottomTabs.Screen name="BottomOne" component={BottomOne} />
      <BottomTabs.Screen name="BottomTwo" component={BottomTwo} />
    </BottomTabs.Navigator>
  );
};

export default Routes;
