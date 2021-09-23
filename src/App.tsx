/**
 * React Native Flib App
 */
import React from 'react';
// import {useColorScheme} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';
import store from './redux/store';
import MainNavigation from './navigations/MainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <MainNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
