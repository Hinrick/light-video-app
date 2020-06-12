/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CameraScreen from './screens/CameraScreen';
import EditingScreen from './screens/EditingScreen';
import VideoShootingScreen from './screens/VideoShootingScreen';
import LandingScreen from './screens/LandingScreen';


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="landing" component={LandingScreen} />
        <Stack.Screen name="Video" component={VideoShootingScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Editing" component={EditingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
