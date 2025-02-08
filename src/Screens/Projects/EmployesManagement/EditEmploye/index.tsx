import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  useLazyGetUsersQuery,
  usePutRequestToUpdateInfoMutation,
} from '../../../../APIServices/hostApiServices';

const EditEmploye = () => {
  //------------Modal Start
  const [showModel, setShowModel] = useState(false);

  const onOpenModalHandler = () => {
    setShowModel(true);
  };

  const onCloseModalHandler = () => {
    setShowModel(false);
  };
  //------------Modal End

  //------------Get Start

  const [triggerFetchUser, userData] = useLazyGetUsersQuery();

  const userList = userData.currentData || [];
  const isLoading = userData.isLoading || false;

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const resoonse = await triggerFetchUser({}).unwrap();
      if (resoonse) {
        console.log('Fetch Sucessfully');
      } else {
        console.log('Fetch Faild');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(isLoading);
  }, []);

  const renderUserCard = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.userCard}
      onPress={() => {
        onCardPressed(item);
      }}>
      <View style={styles.rowContainer}>
        <Text style={styles.userText}>{item?.name}</Text>
        <Text style={styles.userText}>{item?.locaton}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.userText}>{item?.discription}</Text>
        {/* <Text style={styles.userText}>{item?.country}</Text> */}
      </View>
    </TouchableOpacity>
  );
  //------------Get End

  //------------Patch Start
  //inputs

  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [inputDiscription, setInputDiscription] = useState('');

  const onCardPressed = (item: any) => {
    console.log('Clicked----', item);
    setInputId(item?.id || '');
    setInputName(item?.name || '');
    setInputLocation(item?.location || '');
    setInputDiscription(item?.discription || '');

    setTimeout(() => {
      setShowModel(true);
    }, 500);
  };

  //Loading || disable
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  //Api call
  const [updateRequestToUpdateInfo] = usePutRequestToUpdateInfoMutation();

  const onUpdateHandler = async () => {
    setIsSubmitLoading(true);
    const formData = {
      id: inputId,
      name: inputName,
      location: inputLocation,
      discription: inputDiscription,
    };

    try {
      const response = await updateRequestToUpdateInfo(formData).unwrap();

      if (response) {
        console.log('successfull Response:---', response);
        setInputName('');
        setInputLocation('');
        setInputDiscription('');
        fetchUser(); //Refresh data
        setShowModel(false); // modal close
      } else {
        console.log('Failed Response:---', response);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  //------------Patch End

  return (
    <View style={{flex: 1}}>
      <>
        <TouchableOpacity onPress={onOpenModalHandler}>
          <Text style={{fontSize: hp('4%')}}>Open</Text>
        </TouchableOpacity>
      </>
      {/* Ǧeting data from API */}
      <>
        <View style={styles.contentWrapper}>
          {isLoading ? ( //step -6
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          ) : (
            <View style={styles.dataWrapper}>
              {userList.length === 0 ? ( //step -7
                <View style={styles.loadingContainer}>
                  <Text style={styles.noDataText}>No Data Found</Text>
                </View>
              ) : (
                <FlatList //step -8
                  data={userList || []}
                  renderItem={renderUserCard}
                  keyExtractor={(item, index) => index.toString()}
                />
              )}
            </View>
          )}
        </View>
      </>

      {/* modal Section */}
      <>
        <Modal visible={showModel}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={onCloseModalHandler}>
              <Text>Close</Text>
            </TouchableOpacity>

            <>
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
                  <Text>Location</Text>
                  <TextInput
                    style={styles.inputStyles}
                    value={inputLocation}
                    onChangeText={value => {
                      setInputLocation(value);
                    }}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text>Discription</Text>
                  <TextInput
                    style={styles.inputStyles}
                    value={inputDiscription}
                    keyboardType="number-pad"
                    onChangeText={value => {
                      setInputDiscription(value);
                    }}
                  />
                </View>

                <TouchableOpacity
                  disabled={isSubmitLoading} //disable
                  style={styles.submitContainer}
                  onPress={() => {
                    onUpdateHandler();
                  }}>
                  <Text style={{textAlign: 'center', fontSize: hp('5%')}}>
                    {isSubmitLoading ? 'Loading...' : 'Submit'}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          </View>
        </Modal>
      </>
    </View>
  );
};

export default EditEmploye;

const styles = StyleSheet.create({
  //modal styles
  modalContainer: {flex: 1, backgroundColor: 'orange'},
  // getdata styles
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  contentWrapper: {
    flex: 1,
    padding: hp('2%'),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: hp('2%'),
    textAlign: 'center',
    color: '#555',
  },
  dataWrapper: {
    flex: 1,
  },
  userCard: {
    borderWidth: wp('0.5%'),
    borderColor: '#ccc',
    margin: hp('1%'),
    padding: hp('2%'),
    borderRadius: hp('1%'),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userText: {
    fontSize: hp('2%'),
    marginVertical: hp('1%'),
    color: '#333',
    fontWeight: '500',
  },
  noDataText: {
    fontSize: hp('2%'),
    textAlign: 'center',
    color: '#888',
  },

  //Patch styles
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
