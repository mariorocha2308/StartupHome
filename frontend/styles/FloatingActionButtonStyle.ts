import { StyleSheet } from "react-native";

const sx = StyleSheet.create({
  fab: {
		position: 'absolute',
		bottom: 20,
		right: 20,
		backgroundColor: 'black',
		padding: 20,
		borderRadius: 100,
		elevation: 5,
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fabIcon: {
		flex: 1,
		lineHeight: 35,
    height: 40,
		width: 37,
		textAlign: 'center',
	}
});

export { sx }
