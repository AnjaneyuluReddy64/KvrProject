import {View, Text} from 'react-native';
import React from 'react';

const Demo = ({nani, samara}: {nani: string; samara?: string}) => {
  return (
    <View>
      <Text>Text one : {nani}</Text>
      <Text>Text Two : {samara}</Text>
    </View>
  );
};

export default Demo;
