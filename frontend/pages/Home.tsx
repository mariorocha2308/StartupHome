import React, { useEffect, useState, useCallback } from 'react';
import { View, Pressable, Text, ScrollView, RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types/navigation'
import { useQuery } from '@tanstack/react-query';
import { getProductsQuery } from '../utils/apiQueries/product';
import { useAuthAdmin } from '../zustand/authCreator';
import Snackbar from 'rn-animated-snackbar';
import Ionicons from '@expo/vector-icons/Ionicons';
import AgreeLogOut from '../components/Modal/AgreeLogOut';
import FloatingActionButton from '../components/FloatingActionButton';

import { sx } from '../styles/HomeStyle'
import ListItems from '../components/ListItems';

const Home = () => {

	const [refreshing, setRefreshing] = useState(false);
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

	const onRefresh = useCallback(() => {
    setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
  }, []);

	return ( 
		<View style={sx.root}>
			{!products?.length ?
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
					<Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 20, color: '#585858'}}>No hay Productos</Text>
				</View> :
				<ScrollView
					style={{flex: 1, padding: 10}}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
						/>
					}>
					{products.map(product => (
						<ListItems title={product.title} description={product.description} price={product.price} discount={product.discount} key={product._id}/>))}
				</ScrollView>
			}
			{auth && (
				<FloatingActionButton/>
			)}
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
