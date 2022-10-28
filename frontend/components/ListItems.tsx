import React from 'react';
import { View, Text } from 'react-native'
import { formatCurrency } from '../utils/functions/formatCurrency'

import { sx } from '../styles/ListItemsStyle'

interface IListItems {
	title: string,
	description: string,
	price: number,
	discount: number
}

const ListItems = (props: IListItems) => {

	const totalPrice = props.price - props.discount

  return (  
    <View style={sx.item}>
			<View>
				<Text style={sx.itemTitle}>{props.title}</Text>
				<Text style={sx.itemDescription}>{props.description}</Text>
			</View>
			<View style={sx.containPrice}>
				<Text style={sx.itemDiscount}>{formatCurrency(props.price === totalPrice ? 0 : props.price)}</Text>
				<Text style={sx.itemPrice}>{formatCurrency(totalPrice)}</Text>
			</View>
    </View>
  );
}

export default ListItems;
