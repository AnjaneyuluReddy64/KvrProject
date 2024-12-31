import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useLazyGetUsersQuery} from '../../../APIServices/hostApiServices';

const Profile = () => {
  const [triggerGetUsers, usersData] = useLazyGetUsersQuery();

  const [formData, setUsersData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchUsersHandler();
  }, []);

  const fetchUsersHandler = async () => {
    try {
      const response = await triggerGetUsers().unwrap();
      console.log('Fetched Users:', response);
    } catch (fetchError) {
      console.error('Error fetching users:', fetchError);
    }
  };

  useEffect(() => {
    console.log('Users Data:--->', usersData);
    setUsersData(usersData?.currentData || []);
    setisLoading(usersData?.isLoading);
  }, [usersData]);

  console.log('====================================');
  console.log('formData-->', isLoading, formData);
  console.log('====================================');

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Profile</Text>
    </View>
  );
};

export default Profile;
