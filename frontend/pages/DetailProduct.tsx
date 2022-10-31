import React from 'react';
import { View } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { findProductQuery } from '../utils/apiQueries/product';
import { useProductState } from '../zustand/productCreator';

import { sx } from '../styles/DetailProductStyle'

const DetailProduct = () => {

	const { productId } = useProductState()
	const { data: product } = useQuery([productId], () => findProductQuery(productId))

	const total = product !== undefined ? product[0]?.price - product[0].discount : 'Producto sin precio'
	
	return (  
		<View style={sx.root}>
		</View>
	);
}

export default DetailProduct;
