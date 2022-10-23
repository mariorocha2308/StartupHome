import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types/navigation'
import Snackbar from 'rn-animated-snackbar';
import { Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { sx } from '../styles/HomeStyle' 

const Home = () => {
	const [tostVisible, setToastVisible] = useState(false)
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
	
	useEffect(() => {
		navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => setToastVisible(true)} style={{padding: 3}}>
          <Ionicons name='md-lock-closed' size={22} color='white'/>
        </Pressable>
      )
		})
	}, [navigation]);

	return ( 
		<>
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
        duration={Snackbar.LENGTH_SHORT}
				containerStyle={sx.snackbarContainer}
      />
		</>
	);
}

export default Home;
