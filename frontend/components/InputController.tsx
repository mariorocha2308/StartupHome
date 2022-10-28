import React from 'react';
import { View, TextInput } from 'react-native'
import { Controller } from "react-hook-form";

import Input from '../styles/InputControllerStyle'

interface IControllerInput {
	control: any,
	name: string,
	placeholder: string,
	children: JSX.Element,
	numeric?: boolean,
	isMulti?: boolean
}

const InputController = (props: IControllerInput ) => {

	return (  
		<Controller
      control={props.control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
				<View style={Input.inputContain}>
					{props.children}
					{props.numeric ? 
						<TextInput placeholder={props.placeholder} onBlur={onBlur} onChangeText={onChange} value={value} keyboardType='number-pad' style={Input.inputField}/> :
						<TextInput placeholder={props.placeholder} onBlur={onBlur} onChangeText={onChange} value={value} style={Input.inputField} multiline={props.isMulti}/>
					}
				</View>
      )}
      name={props.name}
    />
	);
}

export default InputController;
