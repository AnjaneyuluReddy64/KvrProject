import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Modules/ModuleFour/Home';
import One from '../Screens/Modules/ModuleFour/One';
import Two from '../Screens/Modules/ModuleFour/Two';
import Three from '../Screens/Modules/ModuleFour/Three';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="One" component={One} />

        <Stack.Screen name="Two" component={Two} />

        <Stack.Screen name="Three" component={Three} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

// screenOptions={{headerShown: false}}
//  initialRouteName=''
