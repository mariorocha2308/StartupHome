import React, { useEffect } from 'react';
import { View } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/poppins';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthAdmin } from './zustand/authCreator';
import { sx } from './styles/AppStyle';

import 'react-native-gesture-handler';
import Routing from './navigations/Routing'

export default function App() {

	const { setAuth } = useAuthAdmin()
	
	useEffect(() => {
		const asyncStorage = async () => {
			const localStorage = await AsyncStorage.getItem('@storage_admin')
			if (localStorage !== null) {
				setAuth(JSON.parse(localStorage))
			}
		}

		asyncStorage()
	}, []);

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
