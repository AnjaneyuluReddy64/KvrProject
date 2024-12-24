// import React from 'react';
// import {FlatList, Text, View, StyleSheet, RefreshControl} from 'react-native';

// const dummyData = [
//   {id: '1', title: 'Item 1', description: 'This is the description for Item 1'},
//   {id: '2', title: 'Item 2', description: 'This is the description for Item 2'},
//   {id: '3', title: 'Item 3', description: 'This is the description for Item 3'},
//   {id: '4', title: 'Item 4', description: 'This is the description for Item 4'},
//   {id: '5', title: 'Item 5', description: 'This is the description for Item 5'},
//   {id: '6', title: 'Item 6', description: 'This is the description for Item 6'},
//   {id: '7', title: 'Item 7', description: 'This is the description for Item 7'},
//   {id: '8', title: 'Item 8', description: 'This is the description for Item 8'},
//   {id: '9', title: 'Item 9', description: 'This is the description for Item 9'},
//   {
//     id: '10',
//     title: 'Item 10',
//     description: 'This is the description for Item 10',
//   },
//   {
//     id: '11',
//     title: 'Item 11',
//     description: 'This is the description for Item 11',
//   },
//   {
//     id: '12',
//     title: 'Item 12',
//     description: 'This is the description for Item 12',
//   },
//   {
//     id: '13',
//     title: 'Item 13',
//     description: 'This is the description for Item 13',
//   },
//   {
//     id: '14',
//     title: 'Item 14',
//     description: 'This is the description for Item 14',
//   },
//   {
//     id: '15',
//     title: 'Item 15',
//     description: 'This is the description for Item 15',
//   },
//   {
//     id: '16',
//     title: 'Item 16',
//     description: 'This is the description for Item 16',
//   },
//   {
//     id: '17',
//     title: 'Item 17',
//     description: 'This is the description for Item 17',
//   },
//   {
//     id: '18',
//     title: 'Item 18',
//     description: 'This is the description for Item 18',
//   },
//   {
//     id: '19',
//     title: 'Item 19',
//     description: 'This is the description for Item 19',
//   },
//   {
//     id: '20',
//     title: 'Item 20',
//     description: 'This is the description for Item 20',
//   },
//   {
//     id: '21',
//     title: 'Item 21',
//     description: 'This is the description for Item 21',
//   },
//   {
//     id: '22',
//     title: 'Item 22',
//     description: 'This is the description for Item 22',
//   },
//   {
//     id: '23',
//     title: 'Item 23',
//     description: 'This is the description for Item 23',
//   },
//   {
//     id: '24',
//     title: 'Item 24',
//     description: 'This is the description for Item 24',
//   },
// ];

// const FlatListComponent = () => {
//   const [refresher, setRefresher] = React.useState(false);

//   const refresherHandler = () => {
//     setRefresher(true);
//     console.log('Refresher Logged');
//     setRefresher(false);
//   };

//   const renderItem = ({item}: {item: any}) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       data={dummyData}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//       refreshControl={
//         <RefreshControl refreshing={refresher} onRefresh={refresherHandler} />
//       }
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 14,
//     color: '#555',
//   },
// });

// export default FlatListComponent;

import {View, Text, FlatList, ScrollView, RefreshControl} from 'react-native';
import React from 'react';
const dummyData = [
  {id: '1', title: 'Item 1', description: 'This is the description for Item 1'},
  {id: '2', title: 'Item 2', description: 'This is the description for Item 2'},
  {id: '3', title: 'Item 3', description: 'This is the description for Item 3'},
  {id: '4', title: 'Item 4', description: 'This is the description for Item 4'},
  {id: '5', title: 'Item 5', description: 'This is the description for Item 5'},
  {id: '6', title: 'Item 6', description: 'This is the description for Item 6'},
  {id: '7', title: 'Item 7', description: 'This is the description for Item 7'},
  {id: '8', title: 'Item 8', description: 'This is the description for Item 8'},
  {id: '9', title: 'Item 9', description: 'This is the description for Item 9'},
  {
    id: '10',
    title: 'Item 10',
    description: 'This is the description for Item 10',
  },
  {
    id: '11',
    title: 'Item 11',
    description: 'This is the description for Item 11',
  },
  {
    id: '12',
    title: 'Item 12',
    description: 'This is the description for Item 12',
  },
  {
    id: '13',
    title: 'Item 13',
    description: 'This is the description for Item 13',
  },
  {
    id: '14',
    title: 'Item 14',
    description: 'This is the description for Item 14',
  },
  {
    id: '15',
    title: 'Item 15',
    description: 'This is the description for Item 15',
  },
  {
    id: '16',
    title: 'Item 16',
    description: 'This is the description for Item 16',
  },
  {
    id: '17',
    title: 'Item 17',
    description: 'This is the description for Item 17',
  },
  {
    id: '18',
    title: 'Item 18',
    description: 'This is the description for Item 18',
  },
  {
    id: '19',
    title: 'Item 19',
    description: 'This is the description for Item 19',
  },
  {
    id: '20',
    title: 'Item 20',
    description: 'This is the description for Item 20',
  },
  {
    id: '21',
    title: 'Item 21',
    description: 'This is the description for Item 21',
  },
  {
    id: '22',
    title: 'Item 22',
    description: 'This is the description for Item 22',
  },
  {
    id: '23',
    title: 'Item 23',
    description: 'This is the description for Item 23',
  },
  {
    id: '24',
    title: 'Item 24',
    description: 'This is the description for Item 24',
  },
];
const renderItem = ({item}: {item: any}) => (
  <View>
    <Text>{item.title}</Text>
    <Text>{item.description}</Text>
  </View>
);

const FlatListComponent = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefreshHandler = () => {
    setRefreshing(true);
    console.log('logged');
    setRefreshing(false);
  };
  return (
    <View>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshHandler}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FlatListComponent;
