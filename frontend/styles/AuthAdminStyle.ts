import { StyleSheet } from "react-native";

const sx = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center'
	},
	normalLockIcon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: 120,
		height: 120,
		backgroundColor: '#E0E6F8',
		borderRadius: 100
	},
	errorLockIcon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: 120,
		height: 120,
		backgroundColor: '#F6CED8',
		borderRadius: 100
	},
	successLockIcon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: 120,
		height: 120,
		backgroundColor: '#A9F5D0',
		borderRadius: 100
	},
	iconAvatar: {
		fontSize: 60,
		textAlign: 'center'
	},
	alertTitle: {
		fontFamily: 'Poppins_600SemiBold',
		marginHorizontal: 30,
		color: '#212121',
		marginTop: 30,
		marginBottom: 40,
		textAlign: 'center'
	},
  codeFieldRoot: {
		marginTop: 40,
		marginHorizontal: 30
	},
  cell: {
    width: 45,
    height: 45,
    lineHeight: 45,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center'
  },
  focusCell: {
    borderColor: '#000',
  },
	btn: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50,
		marginHorizontal: 30,
		backgroundColor: 'black',
		height: 55,
	},
	btnText: {
		fontFamily: 'Poppins_600SemiBold',
		color: 'white'
	}
});

export { sx }
