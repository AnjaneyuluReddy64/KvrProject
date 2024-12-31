import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Modules/ModuleFour/Home';
import One from '../Screens/Modules/ModuleFour/One';
import Two from '../Screens/Modules/ModuleFour/Two';
import Three from '../Screens/Modules/ModuleFour/Three';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerScreen from '../Screens/DrawerScreen';
import {HomeIcon} from '../Utils/Svg';
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
            case 'One':
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
      <BottomTab.Screen name="One" component={One} />
      <BottomTab.Screen name="Two" component={Two} />
      <BottomTab.Screen name="Three" component={Three} />
    </BottomTab.Navigator>
  );
};

export default Routes;
