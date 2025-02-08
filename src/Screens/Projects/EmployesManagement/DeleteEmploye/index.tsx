import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React, {useEffect} from 'react';
import {
  useDeleteUserMutation,
  useLazyGetUsersQuery,
} from '../../../../APIServices/hostApiServices';

const DeleteEmploye = () => {
  const [triggerFetchUser, userData] = useLazyGetUsersQuery();
  const userList = userData?.currentData || [];
  const isLoading = userData?.isLoading || false;

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await triggerFetchUser({}).unwrap();
    try {
      console.log('fetch sucess');
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    fetchUser();
  };
  const [deleteStudentDataAPI] = useDeleteUserMutation();
  const onDeleteHandler = async (idNumber: number) => {
    const data = {
      id: idNumber,
    };
    const response = await deleteStudentDataAPI({data: data});
    try {
      if (response) {
        refreshHandler();
        console.log('delete succes', response);
      } else {
        console.log('deleteresponse faild', response);
      }
    } catch (error) {
      console.error('Delete response===>', error);
    }
  };
  const renderUserCard = ({item}) => (
    <View style={styles.userCard}>
      <View style={styles.rowContainer}>
        <Text style={styles.userText}>{item?.name}</Text>
        <Text style={styles.userText}>{item?.city}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.userText}>{item?.phone}</Text>
        <Text style={styles.userText}>{item?.country}</Text>
      </View>
      <View style={[(styles.studentName, {color: 'red'})]}>
        <TouchableOpacity
          onPress={() => {
            onDeleteHandler(item?.id);
          }}>
          <Text
            style={[styles.studentName, {color: 'red', textAlign: 'right'}]}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
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
            <FlatList
              data={userList || []}
              renderItem={renderUserCard}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default DeleteEmploye;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Light background color for overall container
  },
  contentWrapper: {
    flex: 1,
    padding: hp('2%'), // Add padding to content wrapper
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: hp('2%'),
    textAlign: 'center',
    color: '#555', // Grey color for loading text
  },
  dataWrapper: {
    flex: 1,
  },
  userCard: {
    borderWidth: wp('0.5%'),
    borderColor: '#ccc', // Light grey border color
    margin: hp('1%'),
    padding: hp('2%'), // Increased padding for user cards
    borderRadius: hp('1%'),
    backgroundColor: '#fff', // White background for user cards
    shadowColor: '#000', // Shadow color for cards
    shadowOffset: {width: 0, height: 2}, // Shadow offset for cards
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    elevation: 3, // Elevation for shadow effect on Android
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userText: {
    fontSize: hp('2%'),
    marginVertical: hp('1%'),
    color: '#333', // Dark grey color for user text
    fontWeight: '500', // Medium font weight
  },
  noDataText: {
    fontSize: hp('2%'),
    textAlign: 'center',
    color: '#888', // Light grey color for no data text
  },
  studentName: {color: 'green', padding: hp('2'), fontSize: hp('1.5')},
});
