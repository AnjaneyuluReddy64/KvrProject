import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  useDeleteUserMutation,
  useLazyGetUsersQuery,
} from '../../../../../APIServices/hostApiServices';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const DeleteMethodRTK = () => {
  const [triggerFetchUser, userData] = useLazyGetUsersQuery();
  const userList = userData?.currentData || [];
  const isLoading = userData.isLoading || false;

  // console.log(isLoading, userList);

  useEffect(() => {
    fecthUser();
  }, []);

  const refreshHandler = () => {
    fecthUser();
  };

  const fecthUser = async () => {
    const response = await triggerFetchUser({}).unwrap();
    try {
      console.log('fetch sucessfully===>', response);
    } catch (error) {
      console.error('Fetch response===>', error);
    }
  };

  const [deleteStudentDataAPI] = useDeleteUserMutation();

  const onDeleteHandler = async (idNumber: number) => {
    // console.log('Deleted', idNumber);
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
  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        renderItem={({item}) => {
          return (
            <View style={styles.listContainer}>
              <Text style={styles.studentName}>
                S.No :{item?.id} {item?.name}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  onDeleteHandler(item?.id);
                }}>
                <Text style={[styles.studentName, {color: 'red'}]}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DeleteMethodRTK;

const styles = StyleSheet.create({
  container: {flex: 1},
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  studentName: {color: 'green', padding: hp('2'), fontSize: hp('1.5')},
});
