import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useLazyGetUsersQuery} from '../../../../APIServices/hostApiServices';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const EmployeeList = ({navigation}: {navigation: any}) => {
  const addEmployeeHandler = () => {
    navigation.navigate('AddEmploye');
  };
  const editEmployeeHandler = () => {
    navigation.navigate('EditEmploye');
  };
  const deleteEmployeeHandler = () => {
    navigation.navigate('DeleteEmploye');
  };
  const [triggerFetchUser, userData] = useLazyGetUsersQuery();
  const userList = userData?.currentData || [];
  const isLoading = userData?.isLoading || false;
  console.log(userList);
  useEffect(() => {
    triggerFetchUser({});
  }, []);

  const renderUserCard = ({item}: {item: any}) => (
    <View style={styles.userCard}>
      <View style={styles.rowContainer}>
        <Text style={styles.name}>{item?.name}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={editEmployeeHandler}>
            <Text style={styles.iconText}>✏</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={deleteEmployeeHandler}>
            <Text style={styles.iconText}>🗑</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.infoText}>
        <Text style={styles.label}>Location:</Text> {item?.location}
      </Text>

      <Text style={styles.infoText}>
        <Text style={styles.label}>Description:</Text> {item?.discription}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Employees</Text>
        <TouchableOpacity style={styles.addButton} onPress={addEmployeeHandler}>
          <Text style={styles.addButtonText}>➕</Text>
        </TouchableOpacity>
      </View>
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
    </View>
  );
};

export default EmployeeList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F5E9',
    padding: hp('2%'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  heading: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: hp('1%'),
    borderRadius: hp('1%'),
  },
  addButtonText: {
    fontSize: hp('2.5%'),
    color: 'white',
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
  noDataText: {
    fontSize: hp('2%'),
    textAlign: 'center',
    color: '#888', // Light grey color for no data text
  },
  userCard: {
    backgroundColor: '#FFF',
    padding: hp('2%'),
    marginVertical: hp('1%'),
    borderRadius: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: wp('2%'),
  },
  iconText: {
    fontSize: hp('2.5%'),
  },
  name: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: hp('1.8%'),
    marginTop: hp('1%'),
  },
  label: {
    fontWeight: 'bold',
  },
});
