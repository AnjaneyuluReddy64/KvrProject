import {View, Text} from 'react-native';
import React from 'react';

const DataTypes = () => {
  //string
  const string = 'apple';
  console.log(typeof string, string);

  //number
  const number = 2;
  console.log(typeof number, number);

  // Bolean
  const boolean = false;
  console.log(typeof boolean, boolean);

  // Object
  const object = {a: 'a', b: 'b', c: 'c'};
  console.log(typeof object, object);

  // Array
  const array = [1, 2, 3, 4];
  console.log(typeof array, array);

  //ArrayofObject
  const arrayOfObject = [
    {a: 'a', b: 'b'},
    {s: 's', d: 'd'},
    {z: 'z', x: 'x'},
  ];
  console.log(typeof arrayOfObject, arrayOfObject);

  return (
    <View>
      <Text>DataTypes</Text>
    </View>
  );
};

export default DataTypes;
