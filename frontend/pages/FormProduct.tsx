import React from 'react';
import { View, Text, Pressable } from 'react-native'
import { useForm } from "react-hook-form";
import { TproductSend } from '../utils/types/queries';
import { useMutation } from '@tanstack/react-query'
import { useAuthAdmin } from '../zustand/authCreator';
import { postProductQuery } from '../utils/apiQueries/product';
import InputController from '../components/InputController';
import Ionicons from '@expo/vector-icons/Ionicons';

import Btn from '../styles/ButtonStyle'

const FormProduct = () => {

	const { permissionToken } = useAuthAdmin()
	const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
			description: '',
			price: '',
			discount: ''
    }
  });

	const { mutate } = useMutation(postProductQuery, {
		onSuccess: () => {
			
		}
	})
  const onSubmit = (data: any) => mutate(permissionToken, data);

	return ( 
		<View>
			<InputController control={control} name='title' placeholder='Producto'>
				<Ionicons name='md-text'/>
			</InputController>
      {errors.title && <Text>Nombre del producto requerido</Text>}

			<InputController control={control} name='description' placeholder='Description'>
				<Ionicons name='md-receipt' size={24} color="rgb(120, 120, 120)"/>
			</InputController>
      {errors.description && <Text>Descripcion requerida</Text>}

			<InputController control={control} name='price' placeholder='Precio'>
				<Ionicons name='md-pricetag' size={24} color="rgb(120, 120, 120)"/>
			</InputController>
      {errors.price && <Text>Precio requerido</Text>}

			<InputController control={control} name='discount' placeholder='Descuento'>
				<Ionicons name='md-text' size={24} color="rgb(120, 120, 120)"/>
			</InputController>
      {errors.discount && <Text>Descuento requerido</Text>}

			<Pressable style={Btn.btn} onPress={handleSubmit(onSubmit)}>
					<Text style={Btn.btnText}>CREAR</Text>
			</Pressable>
		</View>
	);
}

export default FormProduct;
