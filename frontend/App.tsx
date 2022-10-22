import React from 'react';
import { View } from 'react-native'
import { sx } from './styles/App';

import AppBar from './components/AppBar';

export default function App() {

  return (
    <View style={sx.root}>
      <AppBar/>
    </View>
  );
}