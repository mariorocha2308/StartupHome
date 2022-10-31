import React, { useState } from 'react';
import { View, TextInput } from 'react-native'
import { Controller } from "react-hook-form";

import Input from '../styles/InputControllerStyle'

interface IControllerInput {
	control: any,
	name: string,
	placeholder: string,
	children?: JSX.Element,
	numeric?: boolean,
	isMulti?: boolean,
}

const InputController = (props: IControllerInput ) => {

	const [height, setHeight] = useState(30)

	return (  
		<Controller
      control={props.control}
      rules={{
        required: true,
				validate: (value) => props.numeric ? value > 0 : undefined,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
				<View style={Input.inputContain}>
					{props.children}
					{props.numeric && (
						<TextInput placeholder={props.placeholder} onBlur={onBlur} onChangeText={onChange} value={value} keyboardType='number-pad' style={Input.inputField}/>
					)}
					{props.isMulti && (
						<TextInput placeholder={props.placeholder} onBlur={onBlur} onChangeText={onChange} value={value} style={[Input.inputField, {height: height, minHeight: 30}]} multiline={props.isMulti} onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
						/>
					)}
					{!props.numeric && !props.isMulti && (
						<TextInput placeholder={props.placeholder} onBlur={onBlur} onChangeText={onChange} value={value} style={Input.inputField}/>
					)}
				</View>
      )}
      name={props.name}
    />
	);
}

export default InputController;
