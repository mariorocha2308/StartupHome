import React from 'react';
import { View, TextInput } from 'react-native'
import { Controller } from "react-hook-form";

interface IControllerInput {
	control: any,
	name: string,
	placeholder: string,
	children: JSX.Element,
}

const InputController = (props: IControllerInput ) => {

	return (  
		<Controller
      control={props.control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
				<View>
					{props.children}
					<TextInput placeholder={props.placeholder} onBlur={onBlur} onChangeText={onChange} value={value}/>
				</View>
      )}
      name={props.name}
    />
	);
}

export default InputController;
