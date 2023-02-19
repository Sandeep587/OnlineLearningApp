/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainApp from './app/routes';
import {LogBox} from 'react-native';
import SearchView from './app/view/Search/SearchView';

const App=() => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
   <MainApp/>
//  <SearchView/>
  );
};
export default App;
