import React, {useState} from 'react';
import Home from './Home/Home';

import {SafeAreaView, Text} from 'react-native';
import gStyle from './assets/style/gStyle';

const App = () => {
  return (
    <SafeAreaView style={[gStyle.backgroundWhite, gStyle.globalFlex]}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
