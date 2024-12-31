import {View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import Routes from './src/Routes';
import {hostApiServices} from './src/APIServices/hostApiServices';

const store = configureStore({
  reducer: {
    [hostApiServices.reducerPath]: hostApiServices.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(hostApiServices.middleware),
});

const App = () => {
  return (
    <Provider store={store}>
      {/* <View style={{flex: 1}}> */}
      <Routes />
      {/* </View> */}
    </Provider>
  );
};

export default App;
