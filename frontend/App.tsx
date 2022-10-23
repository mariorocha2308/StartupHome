import React from 'react';
import { View } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/poppins';
import { sx } from './styles/AppStyle';

import 'react-native-gesture-handler';
import Routing from './navigations/Routing'

export default function App() {

	const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black
	});

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={sx.root}>
      <Routing/>
    </View>
  );
}
