import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';

const SwitchandChecbox = () => {
  const [value, seUpdatedSetValue] = useState(false);

  const updateSatate = () => {
    seUpdatedSetValue(!value);
  };
  return (
    <View
      style={{
        backgroundColor: 'lightblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* Switch Example */}
      <View>
        <Text style={{color: 'red', marginBottom: 20}}>
          {value ? 'Switch is On' : 'Switch is  Off'}
        </Text>
        <Switch
          value={value}
          onChange={() => {
            updateSatate();
          }}
        />
      </View>

      {/* Checkbox Example */}
      <View>{/* <Checkbox /> */}</View>
    </View>
  );
};

export default SwitchandChecbox;
