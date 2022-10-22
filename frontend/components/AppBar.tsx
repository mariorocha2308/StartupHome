import React from 'react';
import { Text, View, StatusBar, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { sx } from '../styles/AppBar';

const AppBar = () => {

  const handleTheme = () => {
    console.log('Toogle theme');
  }

  const handleAuthAdmin = () => {
    console.log('Admin');
  }
  
  return (
    <View>
      <StatusBar barStyle='dark-content' backgroundColor='white'/>
      <View style={sx.appBar}>
        <Text style={sx.title}>Catálogo</Text>
        <View style={sx.actions}>
          <Pressable onPress={handleTheme} style={{padding: 3}}>
            <Ionicons name='md-moon' size={22}/>
          </Pressable>
            
          <Pressable onPress={handleAuthAdmin} style={{padding: 3}}>
            <Ionicons name='md-lock-closed' size={22}/>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default AppBar;