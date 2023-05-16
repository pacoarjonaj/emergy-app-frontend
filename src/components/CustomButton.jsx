import React from 'react'
import { Button, View, StyleSheet, Pressable } from 'react-native'
import theme from '../styles/theme'
import StyledText from '../components/StyledText'


const CustomButton = ({ bgColor, fgColor, onPress, text, type }) => {


	return (
		<Pressable 
			onPress={onPress}
			style={[styles.container, styles[`container_${type}`],
					bgColor ? {backgroundColor: bgColor } : {}
				]}
		>
			<StyledText 
				fontWeight='semibold' 
				color='colorWhite' 
				style={ [styles[`text_${type}`],
						fgColor ? {color: fgColor } : {}
					]}
			>
					{text}
				</StyledText>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.red,
		width: '80%',
		padding: 15,
		marginVertical: 5,
		alignItems: 'center',
		borderRadius: 6
	},
	container_tertiary: {
		backgroundColor: 'white'
	},
	container_secondary: {
		backgroundColor: 'white',
		borderColor: theme.colors.red,
		borderWidth: 2
	},
	text: {
		color: 'white'
	},
	text_tertiary: {
		color: theme.colors.gray
	},
	text_secondary: {
		color: theme.colors.red
	}
})

export default CustomButton