import React from 'react';
import { View, Text, Pressable } from 'react-native'
import { useForm } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';
import { QueryClient, useMutation } from '@tanstack/react-query'
import { useAuthAdmin } from '../zustand/authCreator';
import { TproductSend } from '../utils/types/queries';
import { postProductQuery } from '../utils/apiQueries/product';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types/navigation';
import InputController from '../components/InputController';
import Ionicons from '@expo/vector-icons/Ionicons';

import Btn from '../styles/ButtonStyle'

const FormProduct = () => {

	const { permissionToken } = useAuthAdmin()
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
	const queryClient = new QueryClient()
	const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
			description: '',
			price: 0,
			discount: 0
    }
  });

	const { mutate } = useMutation(postProductQuery, {
		onSuccess: () => {
			navigation.navigate('Home')
		}
	})
  const onSubmit = (data: TproductSend) => {
		const infoCreate = { permissionToken, data }
		mutate(infoCreate)
	};

	return ( 
		<View>
			<InputController control={control} name='title' placeholder='Producto'>
				<Ionicons name='md-text'/>
			</InputController>
      {errors.title && <Text>Nombre del producto requerido</Text>}

			<InputController control={control} name='description' placeholder='Description' isMulti={true}>
				<Ionicons name='md-receipt' size={20} color="rgb(120, 120, 120)"/>
			</InputController>
      {errors.description && <Text>Descripcion requerida</Text>}

			<InputController control={control} name='price' placeholder='Precio' numeric={true}>
				<Ionicons name='md-pricetag' size={20} color="rgb(120, 120, 120)"/>
			</InputController>
      {errors.price && <Text>Precio requerido</Text>}

			<InputController control={control} name='discount' placeholder='Descuento' numeric={true}>
				<Ionicons name='md-text' size={20} color="rgb(120, 120, 120)"/>
			</InputController>
      {errors.discount && <Text>Descuento requerido</Text>}

			<Pressable style={Btn.btn} onPress={handleSubmit(onSubmit)}>
					<Text style={Btn.btnText}>CREAR</Text>
			</Pressable>
		</View>
	);
}

export default FormProduct;
