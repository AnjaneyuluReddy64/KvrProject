import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const ModelComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onModalHandler = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      {/* modal button */}
      <View style={styles.openModalContainer}>
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
        <TouchableOpacity
          onPress={() => {
            onModalHandler();
          }}>
          <Text style={styles.modalOpen}>Modal Open</Text>
        </TouchableOpacity>
      </View>

      {/* modal */}
      <View>
        <Modal visible={modalVisible}>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Text>
          <TouchableOpacity
            onPress={() => {
              onModalHandler();
            }}>
            <Text style={styles.modalOpen}>Close Modal</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

export default ModelComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  openModalContainer: {flex: 1},
  modalOpen: {backgroundColor: 'pink', textAlign: 'center'},
});
