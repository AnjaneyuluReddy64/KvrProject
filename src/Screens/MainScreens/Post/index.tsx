// import {View, Text, SafeAreaView} from 'react-native';
// import React from 'react';

// import Variables from '../../Modules/ModuleOne/Variables';

// import Function from '../../Modules/ModuleOne/Function';
// import Hooks from '../../Modules/ModuleOne/Hooks';
// import Chaining from '../../Modules/ModuleOne/Chaining';
// import CounterApp from '../../Modules/ModuleOne/CounterApp';
// import Inline from '../../Modules/ModuleTwo/CssTypes/Inline';
// import Internal from '../../Modules/ModuleTwo/CssTypes/Internal';
// import External from '../../Modules/ModuleTwo/CssTypes/External';
// import ScrollViewComponent from '../../Modules/ModuleTwo/ScrollViewComponent';
// import FlatListComponent from '../../Modules/ModuleTwo/FlatListComponent';
// import FlatlistInsideScrollView from '../../Modules/ModuleTwo/FlatlistInsideScrollView';
// import ActivityIndicatorComponent from '../../Modules/ModuleTwo/ActivityIndicatorComponent';
// import SortComponent from '../../Modules/ModuleOne/SortComponent';
// import FliterComponent from '../../Modules/ModuleOne/FliterComponent';
// import ModelComponent from '../../Modules/ModuleTwo/ModelComponent';
// import ImageComponent from '../../Modules/ModuleTwo/ImageComponent';
// import BackgroundImage from '../../Modules/ModuleTwo/BackgroundImage';
// import ModalImageCoomponent from '../../Modules/ModuleTwo/ModalImageCoomponent';
// import InputComponent from '../../Modules/ModuleTwo/InputComponent';
// import AudioComponent from '../../Modules/ModuleTwo/AudioComponent';
// import SwitchandChecbox from '../../Modules/ModuleTwo/SwitchandChecbox';
// import Home from '../../Modules/ModuleFour/Home';

// import DataTypes from '../../Modules/ModuleOne/DataTypes';

// const Post = ({navigation}: {navigation: any}) => {
//   const navigationHandilor = (screenName: any) => {
//     navigation.navigate(screenName || '');
//   };
//   return (
//     <View style={{flex: 1}}>
//       {/* ModuleOne */}

//       <DataTypes />

//       {/* <DataTypes />
//       <Variables /> */}
//       {/* <Function /> */}
//       {/* <Hooks /> */}
//       {/* <Chaining /> */}
//       {/* <CounterApp /> */}
//       {/* <SortComponent /> */}

//       {/* ModuleTwo */}

//       {/* <Inline /> */}
//       {/* <Internal /> */}
//       {/* <External /> */}
//       {/* <ScrollViewComponent /> */}
//       {/* <FlatListComponent /> */}
//       {/* <FlatlistInsideScrollView /> */}
//       {/* <ActivityIndicatorComponent /> */}
//       {/* <ModelComponent /> */}
//       {/* <ImageComponent /> */}
//       {/* <BackgroundImage /> */}
//       {/* <ModalImageCoomponent /> */}
//       {/* <InputComponent /> */}
//       {/* <AudioComponent /> */}
//       {/* <SwitchandChecbox /> */}

//       {/* ModuleFour */}
//     </View>
//   );
// };

// export default Post;

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  StyleSheet,
} from 'react-native';

const Post = ({navigation}: {navigation: any}) => {
  const [sections, setSections] = useState([
    // {
    //   section: 'ModuleOne',
    //   data: [
    //     {name: 'DataTypes'},
    //     {name: 'Variables'},
    //     {name: 'Function'},
    //     {name: 'Hooks'},
    //     {name: 'Chaining'},
    //     {name: 'CounterApp'},
    //     {name: 'SortComponent'},
    //     {name: 'FliterComponent'},
    //   ],
    // },
    // {
    //   section: 'ModuleTwo',
    //   data: [
    //     {name: 'Inline'},
    //     {name: 'Internal'},
    //     {name: 'External'},
    //     {name: 'ScrollViewComponent'},
    //     {name: 'FlatListComponent'},
    //     {name: 'FlatlistInsideScrollView'},
    //     {name: 'ActivityIndicatorComponent'},
    //     {name: 'ModelComponent'},
    //     {name: 'ImageComponent'},
    //     {name: 'BackgroundImage'},
    //     {name: 'ModalImageCoomponent'},
    //     {name: 'InputComponent'},
    //     {name: 'AudioComponent'},
    //     {name: 'SwitchandChecbox'},
    //   ],
    // },
    // {
    //   section: 'ModuleFour',
    //   data: [{name: 'Home'}],
    // },
    {
      section: 'ModuleFive',
      data: [{name: 'RTKApiCalls'}, {name: 'AxiosApiCalls'}],
    },
    {
      section: 'Projects',
      data: [{name: 'EmployesManagement'}],
    },
  ]);

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName || '');
  };

  const renderSectionHeader = ({section}: {section: {section: string}}) => (
    <Text style={styles.sectionHeader}>{section.section}</Text>
  );

  const renderItem = ({item}: {item: {name: string}}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen(item?.name)}>
        <Text style={styles.buttonText}>Open</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        contentContainerStyle={{padding: 16}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    padding: 8,
    backgroundColor: '#007bff',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Post;
