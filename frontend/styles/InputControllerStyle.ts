import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	inputContain: {
		flexDirection: 'row',
		backgroundColor: 'rgb(230, 230, 230)', 
		padding: 8, 
		marginX: 3, 
		borderRadius: 5, 
		alignItems: 'center', 
		justifyContent: 'center',
		marginBottom: 10,
		marginHorizontal: 10
	},
	inputField: {
		width: '90%', 
		marginLeft: 3, 
		fontSize: 14, 
		fontWeight: '700', 
		height: 30
	},
	warning: {
		marginBottom: 5,
		color: '#FF0040',
		marginLeft: 10,
		fontFamily: 'Poppins_500Medium'
	}
});
