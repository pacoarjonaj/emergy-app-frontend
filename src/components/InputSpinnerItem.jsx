import React from 'react'
import { View } from 'react-native'
import theme from '../styles/theme'
import InputSpinner from 'react-native-input-spinner'


const InputSpinnerItem = ({ label, value, onChange }) => {
	
	return (
		<View>
			<InputSpinner
			min={0}
			step={1}
			inputStyle={{ paddingHorizontal: 10 }}
			color={theme.colors.gray}
			value={value}
			onChange={(num) => onChange(num)}
			/>
		</View>
	)
}

export default InputSpinnerItem