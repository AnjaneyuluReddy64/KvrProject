import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const ActivityIndicatorComponent = () => {
  const [intial, setvalue] = useState(false);

  const onActivityTrueHandler = () => {
    setvalue(true);
  };
  const onActivityFalseHandler = () => {
    setvalue(false);
  };

  return (
    <View>
      <View>
        <ActivityIndicator size={'large'} animating={intial} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={onActivityTrueHandler}>
          <Text style={{color: 'blue'}}>Click Me to Turn ON</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onActivityFalseHandler}>
          <Text style={{color: 'red'}}>Click Me to Turn Off</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityIndicatorComponent;
