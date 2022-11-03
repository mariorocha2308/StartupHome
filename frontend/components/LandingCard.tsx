import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import openMap from 'react-native-open-maps';
import * as Clipboard from 'expo-clipboard';
import Ionicons from '@expo/vector-icons/Ionicons';

import { sx } from '../styles/LandingCardStyle'

const LandingCard = () => {

	const [isCopy, setCopy] = useState(false)

	const handleClipBoard = async () => {
    await Clipboard.setStringAsync('7461139115');
    setCopy(true)
		setTimeout(() => {
			setCopy(false)
		}, 2000);
  };

	const handleToAddress = () => {
    openMap({ latitude: 20.717439174367687, longitude: -97.54090174714233, zoom: 25});
  }

	return (  
		<View style={sx.root}>
			<View style={sx.logo}>
				<Ionicons name='logo-whatsapp' color='white' size={30}/>
				<Text style={sx.landingName}>Mario Rocha Vega</Text>
			</View>
			<Text style={sx.presentation}>"Taller de reparacion de maquinaria industrial, cepillos, routers y equipo pesado."</Text>
				<TouchableOpacity onLongPress={handleClipBoard} style={sx.btnPhone}>
					<Text style={isCopy ? sx.copyTitle : sx.landingPhone}>+52 746 113 9115</Text>
				</TouchableOpacity>
			<TouchableOpacity style={sx.btnMaps} onPress={handleToAddress}>
				<Text style={sx.btnMapsTitle}>VER DIRECCIÓN</Text>
			</TouchableOpacity>
		</View>
	);
}

export default LandingCard;
