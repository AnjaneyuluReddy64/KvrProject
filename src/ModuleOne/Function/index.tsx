import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import React from 'react';

const Function = () => {
  const onTouchableOpacity = () => {
    console.log('TouchableOpacity Clicked');
  };
  const onButtonHandler = () => {
    Alert.alert('Some text');
  };
  return (
    <View>
      {/* console some text */}
      <>
        <TouchableOpacity
          onPress={() => {
            onTouchableOpacity();
          }}>
          <Text>Click Here</Text>
        </TouchableOpacity>
      </>
      <Button
        onPress={() => {
          onButtonHandler();
        }}
        title="Click Me"
      />
    </View>
  );
};

export default Function;
