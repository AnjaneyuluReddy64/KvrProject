import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Variables from './src/Screens/Modules/ModuleOne/Variables';
import DataTypes from './src/Screens/Modules/ModuleOne/DataTypes';
import Function from './src/Screens/Modules/ModuleOne/Function';
import Hooks from './src/Screens/Modules/ModuleOne/Hooks';
import Chaining from './src/Screens/Modules/ModuleOne/Chaining';
import CounterApp from './src/Screens/Modules/ModuleOne/CounterApp';
import Inline from './src/Screens/Modules/ModuleTwo/CssTypes/Inline';
import Internal from './src/Screens/Modules/ModuleTwo/CssTypes/Internal';
import External from './src/Screens/Modules/ModuleTwo/CssTypes/External';
import ScrollViewComponent from './src/Screens/Modules/ModuleTwo/ScrollViewComponent';
import FlatListComponent from './src/Screens/Modules/ModuleTwo/FlatListComponent';
import FlatlistInsideScrollView from './src/Screens/Modules/ModuleTwo/FlatlistInsideScrollView';
import ActivityIndicatorComponent from './src/Screens/Modules/ModuleTwo/ActivityIndicatorComponent';
import SortComponent from './src/Screens/Modules/ModuleOne/SortComponent';
import FliterComponent from './src/Screens/Modules/ModuleOne/FliterComponent';
import ModelComponent from './src/Screens/Modules/ModuleTwo/ModelComponent';
import ImageComponent from './src/Screens/Modules/ModuleTwo/ImageComponent';
import BackgroundImage from './src/Screens/Modules/ModuleTwo/BackgroundImage';
import ModalImageCoomponent from './src/Screens/Modules/ModuleTwo/ModalImageCoomponent';
import InputComponent from './src/Screens/Modules/ModuleTwo/InputComponent';
import AudioComponent from './src/Screens/Modules/ModuleTwo/AudioComponent';
import SwitchandChecbox from './src/Screens/Modules/ModuleTwo/SwitchandChecbox';
import Routes from './src/Routes';
import Home from './src/Screens/Modules/ModuleFour/Home';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* ModuleOne */}

      {/* <DataTypes />
      <Variables /> */}
      {/* <Function /> */}
      {/* <Hooks /> */}
      {/* <Chaining /> */}
      {/* <CounterApp /> */}
      {/* <SortComponent /> */}

      {/* ModuleTwo */}

      {/* <Inline /> */}
      {/* <Internal /> */}
      {/* <External /> */}
      {/* <ScrollViewComponent /> */}
      {/* <FlatListComponent /> */}
      {/* <FlatlistInsideScrollView /> */}
      {/* <ActivityIndicatorComponent /> */}
      {/* <ModelComponent /> */}
      {/* <ImageComponent /> */}
      {/* <BackgroundImage /> */}
      {/* <ModalImageCoomponent /> */}
      {/* <InputComponent /> */}
      {/* <AudioComponent /> */}
      {/* <SwitchandChecbox /> */}

      {/* ModuleFour */}
      <Routes />
    </View>
  );
};

export default App;
