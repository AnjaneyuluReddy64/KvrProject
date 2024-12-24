import {View, Text, TouchableOpacity, Alert, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

const Chaining = () => {
  const list = [
    {id: 1, name: 'nani', rollno: 20},
    {id: 2, name: 'kvr'},
  ];

  return (
    <View>
      <FlatList
        data={list}
        renderItem={({item, index}) => {
          return (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>{item?.id}</Text>
              <Text>{item?.name}</Text>
              <Text>{item?.rollno}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Chaining;
