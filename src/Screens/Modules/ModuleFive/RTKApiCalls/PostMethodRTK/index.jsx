import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {usePostRequestToUpdateInfoMutation} from '../../../../../APIServices/hostApiServices';

const PostMethodRTK = () => {
  //inputs
  const [inputName, setInputName] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCountry, setInputCountry] = useState('');

  //Loading || disable
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  //Api call
  const [postRequestToUpdateInfo] = usePostRequestToUpdateInfoMutation();

  const onSubmitButton = async () => {
    setIsSubmitLoading(true);
    const formData = {
      name: inputName,
      city: inputCity,
      phone: inputPhone,
      country: inputCountry,
    };

    try {
      const response = await postRequestToUpdateInfo(formData).unwrap();

      if (response) {
        console.log('successfull Response:---', response);
        setInputName('');
        setInputCity('');
        setInputPhone('');
        setInputCountry('');
      } else {
        console.log('Failed Response:---', response);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text>Post Method RTK</Text>

      <View style={{flex: 1}}>
        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <TextInput
            style={styles.inputStyles}
            value={inputName}
            onChangeText={value => {
              setInputName(value);
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>City</Text>
          <TextInput
            style={styles.inputStyles}
            value={inputCity}
            onChangeText={value => {
              setInputCity(value);
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Phone</Text>
          <TextInput
            style={styles.inputStyles}
            value={inputPhone}
            keyboardType="number-pad"
            onChangeText={value => {
              setInputPhone(value);
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Country</Text>
          <TextInput
            style={styles.inputStyles}
            value={inputCountry}
            keyboardType="default"
            onChangeText={value => {
              setInputCountry(value);
            }}
          />
        </View>

        <TouchableOpacity
          disabled={isSubmitLoading} //disable
          style={styles.submitContainer}
          onPress={() => {
            onSubmitButton();
          }}>
          <Text style={{textAlign: 'center', fontSize: hp('5%')}}>
            {isSubmitLoading ? 'Loading...' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostMethodRTK;

const styles = StyleSheet.create({
  inputContainer: {
    padding: hp('1%'),
    margin: hp('1%'),
  },
  inputStyles: {
    borderWidth: wp('0.5%'),
    borderRadius: hp('1%'),
    marginTop: hp('1%'),
  },
  submitContainer: {
    width: wp('50%'),
    height: hp('8%'),
    backgroundColor: 'orange',
    borderRadius: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

// wt nxt
