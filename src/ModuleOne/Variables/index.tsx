import {View, Text} from 'react-native';
import React from 'react';

const Variables = () => {
  //let
  let letVariable = 33;
  console.log('let type--->', letVariable);

  //var
  var varVariable = false;
  console.log('var Type--->', varVariable);

  //const  (most used variable)
  const constVariable = 'A';
  console.log('const Type--->', constVariable);

  return (
    <View>
      <Text>Variables</Text>
    </View>
  );
};

export default Variables;
