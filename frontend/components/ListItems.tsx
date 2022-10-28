import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { formatCurrency } from '../utils/functions/formatCurrency'
import { useAuthAdmin } from '../zustand/authCreator';
import { deleteProductQuery } from '../utils/apiQueries/product'

import { sx } from '../styles/ListItemsStyle'
import AgreeDelete from './Modal/AgreeDelete';

interface IListItems {
	id: number,
	title: string,
	description: string,
	price: number,
	discount: number
}

const ListItems = (props: IListItems) => {

	const totalPrice = props.price - props.discount
	const { auth, permissionToken } = useAuthAdmin()

	const handleLongPress = () => {
		if (auth) {
			AgreeDelete(() => deleteProductQuery(permissionToken, props.id))
		}
	}

  return (  
		<TouchableOpacity onLongPress={handleLongPress}>
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
