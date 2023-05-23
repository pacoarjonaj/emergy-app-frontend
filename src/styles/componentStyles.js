import theme from "./theme"

const componentStyles = {
	navigationTheme: {
		dark: false,
		colors: {
			primary: '#b0463b',
			background: '#ffffff',
			card: '#f3f6f4',
			text: '#24292e',
			border: '#24292e',
			notification: '#f3f6f4'
		}
	},
	viewMethane: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 15,
		paddingHorizontal: 20
	},
	square: {
		width: 60,
   	 	height: 60,
    	alignItems: 'center',
    	justifyContent: 'center',
		borderRadius: 8
	},
	container: {
		flex: 1, 
		flexDirection: 'column', 
		alignItems: 'center',
		paddingHorizontal: 4
	},
	containerAccount: {
		flex:1, 
		alignItems: 'center', 
		paddingHorizontal: 20, 
		paddingVertical: 50
	},
	containerManual: {
		flex:1, 
		alignItems: 'center', 
		paddingHorizontal: 20, 
		paddingVertical: 10
	},
	methaneContainer: {
		flex: 1, 
		flexDirection: 'column', 
		alignContent: 'center',
		paddingTop: 6,
		paddingHorizontal: 4 
	},
	buttonContainer: {
		bottom: 0,
		width: '100%',
		alignItems: 'center',
		paddingVertical: 15
	},
	buttonMajor: {
		backgroundColor: theme.colors.red, 
		borderRadius: 8, 
		padding: 12, 
		marginVertical: 18
	},
	pressedButtonMajor: {
		backgroundColor: theme.colors.green, 
		borderRadius: 8, 
		padding: 12, 
		marginVertical: 18
	},
	button: {
		backgroundColor: theme.colors.red,
		borderRadius: 8,
		padding: 6,
	},
	pressedButton: {
		backgroundColor: theme.colors.green,
		borderRadius: 8,
		padding: 6,
	},
	input: {
		height: 80,
		textAlignVertical: 'top',
		margin: 12,
		borderWidth: 1,
		padding: 10
	},
	conainerIputSpinner: {
		flexDirection: 'row', 
		alignItems: 'center',
		justifyContent: 'center', 
		paddingBottom: 15,
		width: '30%'
	},
	labelSpinner: {
		width: 90, 
		paddingRight: 20
	},
	map: {
		width: '90%',
		height: '60%'
	},
	separator: {
		height: 0.5,
		width: '90%',
		alignSelf: 'center',
		backgroundColor: '#bcbcbc'
	}
}

export default componentStyles