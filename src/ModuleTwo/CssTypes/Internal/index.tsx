import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Internal = () => {
  return (
    <View>
      <Text style={styles.textColor}>Internal</Text>
    </View>
  );
};

export default Internal;

const styles = StyleSheet.create({
  textColor: {
    color: 'blue',
  },
});
