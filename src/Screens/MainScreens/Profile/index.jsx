import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useLazyGetUsersQuery} from '../../../APIServices/hostApiServices';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Profile = () => {
  const [triggerFetchUsers, userData] = useLazyGetUsersQuery();

  const userList = userData?.currentData || [];
  const isLoading = userData?.isLoading || false;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await triggerFetchUsers({}).unwrap();
      if (response) {
        console.log('API fetched successfully');
      } else {
        console.log('Failed to fetch API');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    console.log('Fetched Users:', userList, 'Loading State:', isLoading);
  }, [userData]);

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
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <View style={styles.dataWrapper}>
            {userList.length === 0 ? (
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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: hp('2%'),
    textAlign: 'center',
  },
  dataWrapper: {
    flex: 1,
  },
  userCard: {
    borderWidth: wp('0.5%'),
    margin: hp('1%'),
    padding: hp('1%'),
    borderRadius: hp('1%'),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userText: {
    fontSize: hp('2%'),
    marginVertical: hp('1%'),
  },
  noDataText: {
    fontSize: hp('2%'),
    textAlign: 'center',
  },
});
