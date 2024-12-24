import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
const imageList = [
  {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1714796239/IMG_6835_becju5.jpg',
  },
  {
    id: '2',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1704623114/IMG_20140505_201852_ge7dge.jpg',
  },
  {
    id: '3',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1679754674/cld-sample-4.jpg',
  },
  {
    id: '4',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1679754674/cld-sample-3.jpg',
  },
  {
    id: '5',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1679754673/cld-sample-2.jpg',
  },
  {
    id: '6',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1679754673/cld-sample.jpg',
  },
  {
    id: '7',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1679754648/sample.jpg',
  },
  {
    id: '8',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1714796239/IMG_6835_becju5.jpg',
  },
  {
    id: '9',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1704623114/IMG_20140505_201852_ge7dge.jpg',
  },
  {
    id: '10',
    imageUrl:
      'https://res.cloudinary.com/dm1vkh0ga/image/upload/v1679754674/cld-sample-4.jpg',
  },
];

const renderItem = ({item}: {item: any}) => (
  <View
    style={{
      flex: 1,
      padding: 20,
    }}>
    <Image
      alt="img"
      source={{uri: item?.imageUrl}}
      style={{width: 100, height: 100}}
    />
  </View>
);
const ImageComponent = () => {
  return <FlatList data={imageList} renderItem={renderItem} />;
};

export default ImageComponent;
