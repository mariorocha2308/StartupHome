import { StyleSheet } from "react-native";

const sx = StyleSheet.create({
  item: {
		flexDirection: 'row',
		paddingVertical: 7,
		height: 70,
		alignItems: 'center'
	},
	itemInfo: {
		height: '100%',
		width: '60%',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	itemTitle: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 22,
		textTransform: 'capitalize',
	},
	itemDescription: {
		fontFamily: 'Poppins_500Medium',
		color: '#848484',
		fontSize: 15
	},
	containPrice: {
		height: '100%',
		alignItems: 'flex-end',
		width: '40%',
		justifyContent: 'center'
	},
	itemPrice: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 22
	},
	itemDiscount: {
		fontFamily: 'Poppins_600SemiBold',
		color: '#FF0040',
		textDecorationLine: 'line-through',
		fontSize: 15,
	}
});

export { sx }
