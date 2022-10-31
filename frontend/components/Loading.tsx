import React from 'react';
import { View, ActivityIndicator, Text } from "react-native";

const Loading = () => {
	return (  
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<ActivityIndicator size="large" color='black' style={{marginBottom: 8}}/>
			<Text style={{fontFamily: 'Poppins_600SemiBold'}}>Cargando la lista de productos</Text>
		</View>
	);
}

export default Loading;
