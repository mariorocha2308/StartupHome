import { StyleSheet } from "react-native";

const sx = StyleSheet.create({
  root: {
		backgroundColor: 'black',
		borderRadius: 7,
		marginBottom: 15,
		padding: 20,
    height: 160
  },
	logo: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	landingName: {
		fontFamily: 'Poppins_600SemiBold',
		color: 'white',
		fontSize: 17,
		marginLeft: 12
	},
	presentation: {
		color: 'white',
		paddingVertical: 13,
		fontFamily: 'Poppins_500Medium',
		alignSelf: 'center'
	},
	copyTitle: {
		color: '#01DF3A',
		fontFamily: 'Poppins_600SemiBold',
	},
	btns: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	btnLanding: {
		padding: 4,
		alignSelf: 'flex-end'
	},
	btnTitle: {
		color: '#58ACFA',
		fontFamily: 'Poppins_600SemiBold'
	}
});

export { sx }
