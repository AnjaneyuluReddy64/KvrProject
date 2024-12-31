import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import One from '../Screens/Modules/ModuleFour/One';
import Two from '../Screens/Modules/ModuleFour/Two';
import Three from '../Screens/Modules/ModuleFour/Three';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerScreen from '../Screens/DrawerScreen';
import {HomeIcon} from '../Utils/Svg';
import Post from '../Screens/MainScreens/Post';
import Profile from '../Screens/MainScreens/Profile';
import Settings from '../Screens/MainScreens/Settings';
import DataTypes from '../Screens/Modules/ModuleOne/DataTypes';
import Home from '../Screens/MainScreens/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="DrawerDrawerNavigator"
          component={DrawerNavigator}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="Three" component={Three} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="DataTypes" component={DataTypes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
    </Drawer.Navigator>
  );
};
const BottomNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',

        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Home':
              return (
                <HomeIcon
                  height={size}
                  width={size}
                  fill={focused ? 'blue' : 'gray'}
                />
              );
            case 'Post':
              return (
                <HomeIcon
                  height={size}
                  width={size}
                  fill={focused ? 'blue' : 'gray'}
                />
              );
          }
        },
      })}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Post" component={Post} />
      <BottomTab.Screen name="Profile" component={Profile} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
};

export default Routes;
