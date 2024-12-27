import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const One = ({navigation}: {navigation: any}) => {
  const onbackHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>One</Text>

      <TouchableOpacity
        onPress={() => {
          onbackHandler();
        }}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default One;
