import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

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

const ModalImageComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Toggle the modal visibility
  const onVisibleHandler = () => {
    setIsVisible(!isVisible);
  };

  // Handle image click to open the modal with the clicked image
  const onImagePress = imageUrl => {
    setSelectedImage(imageUrl);
    onVisibleHandler(); // Open the modal
  };

  // Render each item in the FlatList
  const renderItem = ({item}: {item: any}) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => onImagePress(item.imageUrl)}>
        <Image source={{uri: item.imageUrl}} style={styles.thumbnailImage} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* FlatList to display images */}
      <FlatList
        data={imageList}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
      />

      {/* Modal to display the full-size image */}
      <Modal visible={isVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={{uri: selectedImage}} style={styles.fullImage} />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onVisibleHandler}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    margin: 5,
  },
  thumbnailImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 2,
  },
  listContainer: {
    paddingBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    maxWidth: '90%',
  },
  fullImage: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ModalImageComponent;
