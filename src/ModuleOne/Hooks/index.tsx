import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';

const Hooks = () => {
  // useState
  const [number, setNumber] = useState(0);
  const onIncrementHandler = () => {
    setNumber(number + 1);
  };
  // useEffect
  const onUseEfectHandler = () => {
    // Alert.alert('useEffect executed');
  };
  useEffect(() => {
    onUseEfectHandler();
  }, [number]);

  const list = [
    {id: 1, name: 'nani', rollno: 20},
    {id: 2, name: 'kvr'},
  ];

  return (
    <View>
      <Text>Number is: {number}</Text>
      <TouchableOpacity
        onPress={() => {
          onIncrementHandler();
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hooks;
