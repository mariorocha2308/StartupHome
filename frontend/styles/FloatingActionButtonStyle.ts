import { StyleSheet } from "react-native";

const sx = StyleSheet.create({
  fab: {
		position: 'absolute',
		bottom: 30,
		right: 30,
		backgroundColor: 'black',
		padding: 20,
		borderRadius: 100,
		elevation: 5,
		width: 78,
		height: 78,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fabIcon: {
		flex: 1,
		lineHeight: 40,
    height: 40,
		width: 37,
		textAlign: 'center',
	}
});

export { sx }
