import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import One from './One';
import Two from './Two';
import Three from './Three';

const Home = ({navigation}: {navigation: any}) => {
  const navigationHandler = (value: any) => {
    console.log('clicked------>', value);

    navigation.navigate(value || '');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Home</Text>

      <TouchableOpacity
        onPress={() => {
          navigationHandler('One');
        }}>
        <Text>One</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigationHandler('Two');
        }}>
        <Text>Two</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigationHandler('Three');
        }}>
        <Text>Three</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
