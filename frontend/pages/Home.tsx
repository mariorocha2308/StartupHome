import React, { useEffect, useState } from 'react';
import { View, Pressable, FlatList, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types/navigation'
import { useQuery } from '@tanstack/react-query';
import { getProductsQuery } from '../utils/apiQueries/product';
import { useAuthAdmin } from '../zustand/authCreator';
import Snackbar from 'rn-animated-snackbar';
import Ionicons from '@expo/vector-icons/Ionicons';
import AgreeLogOut from '../components/Modal/AgreeLogOut';

import { sx } from '../styles/HomeStyle' 

const Home = () => {

	const [tostVisible, setToastVisible] = useState(false)
	const { auth, logOut } = useAuthAdmin()
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
	const { data: products } = useQuery(['products'], getProductsQuery)

	const handleCheckAuth = () => {
		if (auth === false) {
			return setToastVisible(true)
		} else if (auth === true) {
			AgreeLogOut(logOut)
		}
	}
	
	useEffect(() => {
		navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handleCheckAuth} style={{padding: 3}}>
          <Ionicons name={!auth ? 'md-lock-closed' : 'md-lock-open'} size={22} color='white'/>
        </Pressable>
      )
		})
	}, [navigation, auth]);

	return ( 
		<View style={sx.root}>
			<Snackbar
        visible={tostVisible}
        onDismiss={() => setToastVisible(false)}
        text='¿Tienes un código de acceso?'
        action={{
          label: 'SI, TENGO',
          onPress: () => {
            navigation.navigate('Auth')
          },
        }}
        duration={Snackbar.LENGTH_MEDIUM}
				containerStyle={sx.snackbarContainer}
      />
		</View>
	);
}

export default Home;
