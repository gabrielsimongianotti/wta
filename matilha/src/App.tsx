import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppProvider from './hooks';

import Router from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#191919" />
      <AppProvider>

        <View style={{backgroundColor: '#191919', flex: 1}}>
          <Router />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
