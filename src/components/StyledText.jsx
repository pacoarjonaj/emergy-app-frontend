import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'


const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.medium,
		fontFamily: 'System',
		fontWeight: theme.fontWeights.normal
	},
	colorPrimary: {
		color: theme.colors.textPrimary
	},
	colorSecondary: {
		color: theme.colors.textSecondary
	},
	xsmall: {
		fontSize: theme.fontSizes.xsmall
	},
	small: {
		fontSize: theme.fontSizes.small
	},
	medium: {
		fontSize: theme.fontSizes.medium
	},
	large: {
		fontSize: theme.fontSizes.large
	},
	xlarge: {
		fontSize: theme.fontSizes.xlarge
	},
	light: {
		fontWeight: theme.fontWeights.light
	},
	normal: {
		fontWeight: theme.fontWeights.normal
	},
	medium: {
		fontWeight: theme.fontWeights.medium
	},
	semibold: {
		fontWeight: theme.fontWeights.semibold
	},bold: {
		fontWeight: theme.fontWeights.bold
	},
	textAlignCenter: {
		textAlign: 'center'
	}
})

export default function StyledText ({align, children, color, fontSize, fontWeight, style, ...restOfProps}) {
	
	const textStyles = [
		styles.text,
		align === 'center' && styles.textAlignCenter,
		color === 'colorPrimary' && styles.colorPrimary,
		color === 'colorSeconadry' && styles.colorSecondary,
		fontSize === 'xsmall' && styles.xsmall,
		fontSize === 'small' && styles.small,
		fontSize === 'medium' && styles.medium,
		fontSize === 'large' && styles.large,
		fontSize === 'xlarge' && styles.xlarge,
		fontWeight === 'light' && styles.light,
		fontWeight === 'normal' && styles.normal,
		fontWeight === 'medium' && styles.medium,
		fontWeight === 'semibold' && styles.semibold,
		fontWeight === 'bold' && styles.bold,
		style
	]

	return (
		<Text style={textStyles} {...restOfProps}>
			{children}
		</Text>
	)
}