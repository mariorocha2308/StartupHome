import { StyleSheet } from "react-native";

const sx = StyleSheet.create({
  item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 12,
		marginBottom: 5
	},
	// itemInfo: {
	// 	flexDirection: 'row',
	// 	alignItems: 'center'
	// },
	// containBadge: {
	// 	marginRight: 20
	// },
	// badge: {
	// 	width: 15, 
	// 	height: 15,
	// 	borderRadius: 100,
	// 	backgroundColor: '#04B431'
	// },
	itemTitle: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 22,
		textTransform: 'capitalize'
	},
	itemDescription: {
		fontFamily: 'Poppins_500Medium',
		color: '#848484',
		fontSize: 15
	},
	containPrice: {
		alignItems: 'flex-end'
	},
	itemPrice: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 22
	},
	itemDiscount: {
		fontFamily: 'Poppins_600SemiBold',
		color: '#FA5882',
		textDecorationLine: 'line-through',
		fontSize: 15
	}
});

export { sx }
