import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types/navigation';
import { formatCurrency } from '../utils/functions/formatCurrency'
import { useAuthAdmin } from '../zustand/authCreator';
import { useProductState } from '../zustand/productCreator';
import { deleteProductQuery } from '../utils/apiQueries/product'

import { sx } from '../styles/ListItemsStyle'
import AgreeDelete from './Modal/AgreeDelete';

interface IListItems {
	id: string,
	title: string,
	description: string,
	price: number,
	discount: number
}

const ListItems = (props: IListItems) => {

	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
	const { setId } = useProductState()
	const totalPrice = props.price - props.discount
	const { auth, permissionToken } = useAuthAdmin()

	const handleLongPress = () => {
		if (auth) {
			AgreeDelete(() => deleteProductQuery(permissionToken, props.id))
		}
	}

	const handlePress = () => {
		setId(props.id)
		navigation.navigate('Detail')
	}

  return (  
		<TouchableOpacity onLongPress={handleLongPress} onPress={handlePress}>
			<View style={sx.item}>
				<View style={sx.itemInfo}>
					<Text style={sx.itemTitle} numberOfLines={1}>{props.title}</Text>
					<Text style={sx.itemDescription} numberOfLines={1}>{props.description}</Text>
				</View>
				<View style={sx.containPrice}>
					<Text style={sx.itemPrice} numberOfLines={1}>{formatCurrency(totalPrice)}</Text>
					<Text style={sx.itemDiscount} numberOfLines={1}>{formatCurrency(props.price === totalPrice ? 0 : props.price)}</Text>
				</View>
			</View>
		</TouchableOpacity>
  );
}

export default ListItems;
