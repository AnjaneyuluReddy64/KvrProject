import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const EmployesManagement = ({navigation}: {navigation: any}) => {
  const startProjectHandilor = () => {
    navigation.navigate('EmployeList');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{padding: 50, fontSize: 30}}>EmployesManagement</Text>

      <TouchableOpacity
        onPress={() => {
          startProjectHandilor();
        }}>
        <Text style={{padding: 50, fontSize: 30}}>Start Project</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmployesManagement;

const styles = StyleSheet.create({});
