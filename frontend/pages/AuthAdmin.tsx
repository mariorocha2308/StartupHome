import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types/navigation';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { postSessionTokenQuery } from '../utils/apiQueries/admin'
import { useMutation } from '@tanstack/react-query'
import Ionicons from '@expo/vector-icons/Ionicons';

import { sx } from '../styles/AuthAdminStyle'
import { useAuthAdmin } from '../zustand/authCreator';

const AuthAdmin = () => {

	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
	const [value, setValue] = useState('');
	const [onError, setError] = useState(false)
	const [onSuccess, setSuccess] = useState(false)
  const ref = useBlurOnFulfill({value, cellCount: 5});
	const { login } = useAuthAdmin()
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

	const { mutate } = useMutation(postSessionTokenQuery, {
		onSuccess: (auth) => {
			if (auth?.isAuth === false) {
				setError(true)
				setValue('')
				setTimeout(() => {
					setError(false)
				}, 1000);
			}
			if (auth?.isAuth === true) {
				setSuccess(true)
				login(auth)
				setTimeout(() => {
					setSuccess(false)
					navigation.navigate('Home')
				}, 1000);
			}
		}
	})

	return (
		<View style={sx.root}>
			{!onError && !onSuccess && (
				<View style={sx.normalLockIcon}>
					<Ionicons name='lock-closed' style={sx.iconAvatar} color='#5882FA'/>
				</View>
			)}
			{onError && (
				<View style={sx.errorLockIcon}>
					<Ionicons name='lock-closed' style={sx.iconAvatar} color='#FA5882'/>
				</View>
			)}
			{onSuccess && (
				<View style={sx.successLockIcon}>
					<Ionicons name='lock-closed' style={sx.iconAvatar} color='#04B486'/>
				</View>
			)}
			<Text style={sx.alertTitle}>Si eres administrador ingresa el código para iniciar sesión</Text>
			<CodeField
				ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={5}
        rootStyle={sx.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[sx.cell, isFocused && sx.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
			<Pressable style={sx.btn} onPress={() => mutate(value)}>
					<Text style={sx.btnText}>AUTENTICAR</Text>
			</Pressable>
		</View>
	);
}

export default AuthAdmin;
