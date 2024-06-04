/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainContainer from './container/MainContainer/MainContainer';
import Splash from './screens/splash/Splash';
import Home from './screens/home/Home';
import Search from './screens/Search/Search';
import MovieDetails from './screens/details/MovieDetails';
import MainNavigation from './navigation/MainNavigation';
function App(): React.JSX.Element {
  return <MainNavigation></MainNavigation>;
}

export default App;
