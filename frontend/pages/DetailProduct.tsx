import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { findProductQuery } from '../utils/apiQueries/product';
import { formatCurrency } from '../utils/functions/formatCurrency'
import { useProductState } from '../zustand/productCreator';
import { useAuthAdmin } from '../zustand/authCreator';
import { useNavigation } from '@react-navigation/native';

import { sx } from '../styles/DetailProductStyle'

const DetailProduct = () => {

	const { auth } = useAuthAdmin()
	const { productId } = useProductState()
	const { data: product } = useQuery([productId], () => findProductQuery(productId))

	// const total = product[0].price - product[0].discount

	return (  
		<View style={sx.root}>
			{/* <Text style={sx.productTitle}>{product[0]?.title}</Text>
			<Text>{formatCurrency(total)}</Text>
			<Text>{product[0]._id}</Text>
			<Text>{product[0].description}</Text> */}
		</View>
	);
}

export default DetailProduct;
