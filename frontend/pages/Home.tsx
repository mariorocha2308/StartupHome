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
import ListItems from '../components/ListItems';

import { sx } from '../styles/HomeStyle'
import Loading from '../components/Loading';

const Home = () => {

	const [refreshing, setRefreshing] = useState(false);
	const [tostVisible, setToastVisible] = useState(false)
	const { auth, logOut } = useAuthAdmin()
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
	const { data: products, refetch, isLoading } = useQuery(['products'], getProductsQuery)

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
		refetch()
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
  }, []);

	if (isLoading) {
		return <Loading/>
	}

	return ( 
		<View style={sx.root}>
			<ScrollView
				style={{flex: 1, padding: 10, }}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}>
					{!products?.length ?
						<View style={{alignItems: 'center', marginTop: 60}}>
							<Ionicons name='md-refresh-circle' size={50} color='#585858'/>
							<Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 18, color: '#585858', marginTop: 10}}>No hay Productos</Text>
						</View> :
						products.map(product => (
							<ListItems id={product._id} title={product.title} description={product.description} price={product.price} discount={product.discount} key={product._id}/>))
					}
			</ScrollView>
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
