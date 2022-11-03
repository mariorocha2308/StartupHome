import { StyleSheet } from "react-native";

const sx = StyleSheet.create({
  root: {
		backgroundColor: 'black',
		borderRadius: 10,
		marginHorizontal: 8,
		marginVertical: 15,
		padding: 20,
    height: 200,
		elevation: 20,
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
		paddingVertical: 7,
		fontFamily: 'Poppins_500Medium',
		alignSelf: 'center'
	},
	btnPhone: {
		alignSelf: 'center',
		marginVertical: 5
	},
	landingPhone: {
		fontFamily: 'Poppins_700Bold',
		color: 'white',
		textAlign: 'center',
		fontSize: 23
	},
	copyTitle: {
		color: '#58ACFA',
		fontFamily: 'Poppins_700Bold',
		textAlign: 'center',
		fontSize: 23
	},
	btnMaps: {
		padding: 4,
		alignSelf: 'flex-end'
	},
	btnMapsTitle: {
		color: '#58ACFA',
		fontFamily: 'Poppins_600SemiBold'
	}
});

export { sx }
