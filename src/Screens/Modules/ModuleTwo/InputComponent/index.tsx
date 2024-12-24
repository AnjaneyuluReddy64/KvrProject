import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const InputComponent = () => {
  const [showData, setShowData] = useState(false);

  // intialdata
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [number, setMobile] = useState('');

  // updatedData
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    location: '',
    number: '',
  });
  console.log('formData-->', formData);

  // submitButton Clicked
  const handleSubmit = () => {
    setFormData(prevData => ({
      ...prevData,
      name: name,
      age: age,
      email: email,
      location: location,
      number: number,
    }));
    setShowData(true);

    setName('');
    setAge('');
    setEmail('');
    setLocation('');
    setMobile('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Form Data Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        placeholderTextColor="#B0B0B0"
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#B0B0B0"
        value={age}
        onChangeText={value => setAge(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        placeholderTextColor="#B0B0B0"
        onChangeText={value => setEmail(value)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        placeholderTextColor="#B0B0B0"
        onChangeText={value => setLocation(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={number}
        placeholderTextColor="#B0B0B0"
        onChangeText={value => setMobile(value)}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {showData && (
        <View style={styles.submittedDataStyleContainer}>
          <Text style={styles.submittedDataStyle}>Name: {formData.name}</Text>
          <Text style={styles.submittedDataStyle}>Age: {formData.age}</Text>
          <Text style={styles.submittedDataStyle}>Email: {formData.email}</Text>
          <Text style={styles.submittedDataStyle}>
            "Location: " {formData.location}
          </Text>
          <Text style={styles.submittedDataStyle}>
            "Number: " {formData.number}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: hp(5),
    width: wp(90),
    borderWidth: wp(1),
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  submittedDataStyleContainer: {paddingTop: wp(15)},
  submittedDataStyle: {
    paddingLeft: wp(20),
    color: '#333',
    fontSize: wp(4),
  },
});

export default InputComponent;
