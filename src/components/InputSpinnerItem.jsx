import React from 'react'
import { View } from 'react-native'
import InputSpinner from 'react-native-input-spinner'
import theme from '../styles/theme'
import componentStyles from '../styles/componentStyles'
import StyledText from './StyledText'


const InputSpinnerItem = ({ label, value, onChange }) => {
	
	return (
		<View style={componentStyles.conainerIputSpinner}>
			<View style={componentStyles.labelSpinner}>
				<StyledText>{label}</StyledText>
			</View>

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
		</View>
	)
}

export default InputSpinnerItem