import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BackgroundImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{
          uri: 'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1679754648/sample.jpg',
        }}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>This Background Image</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    height: 1000,
    justifyContent: 'center',
  },
  name: {
    fontSize: 50,
    color: 'white',
  },
});

export default BackgroundImage;
