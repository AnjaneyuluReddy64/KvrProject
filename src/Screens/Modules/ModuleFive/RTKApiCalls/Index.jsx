import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const RTKApiCalls = ({navigation}) => {
  const navHandler = screenName => {
    navigation.navigate(screenName || '');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RTK API Calls</Text>

      <TouchableOpacity
        style={styles.methodContainer}
        onPress={() => navHandler('GetMethodRTK')}>
        <Text style={styles.methodTitle}>Get Method</Text>
        <Text style={styles.methodDescription}>
          Fetches data from the server using a GET request.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.methodContainer}
        onPress={() => navHandler('PostMethodRTK')}>
        <Text style={styles.methodTitle}>Post Method</Text>
        <Text style={styles.methodDescription}>
          Sends new data to the server using a POST request.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.methodContainer}
        onPress={() => {
          navHandler('PatchMethodRTK');
        }}>
        <Text style={styles.methodTitle}>Patch Method</Text>
        <Text style={styles.methodDescription}>
          Updates part of an existing resource with a PATCH request.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.methodContainer}
        onPress={() => {
          navHandler('DeleteMethodRTK');
        }}>
        <Text style={styles.methodTitle}>Delete Method</Text>
        <Text style={styles.methodDescription}>
          Removes data from the server using a DELETE request.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RTKApiCalls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  methodContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  methodTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  methodDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
});
