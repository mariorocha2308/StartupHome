import React from 'react';
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types/navigation';
import Ionicons from '@expo/vector-icons/Ionicons';

import { sx } from '../styles/FloatingActionButtonStyle'

const FloatingActionButton = () => {

	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

	return (
		<Pressable style={sx.fab} onPress={() => navigation.navigate('Create')}>
			<Ionicons name={'md-add'} size={38} color='white' style={sx.fabIcon}/>
		</Pressable>
	);

}

export default FloatingActionButton;
