import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'
import theme from '../styles/theme'


const CustomInput = ({ control, name, placeholder, rules = {}, inputMode, keyboardType, secureTextEntry }) => {

	const [borderColor, setBorderColor] = useState(theme.colors.gray)
	const [borderWidth, setBorderWidth] = useState(1)

	const handleOnFocus = () => {
		setBorderColor('#7c7c7c')
		setBorderWidth(2)
	}

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
				<>
					<View style={[styles.container, {borderColor: error ? 'red' : borderColor, borderWidth: borderWidth }]}>
						<TextInput 
							value={value} 
							onChangeText={onChange} 
							onFocus={handleOnFocus}
							onBlur={() => {
								setBorderColor(theme.colors.gray)
								setBorderWidth(1)
								onBlur()
							}} 
							placeholder={placeholder}
							style={styles.input}
							inputMode={inputMode}
							keyboardType={keyboardType}
							secureTextEntry={secureTextEntry}
						/>
					</View>
					{error && (
						<Text style={{color: 'red', alignSelf: 'stretch', paddingLeft: '10%'}}>{error.message || 'Error'}</Text>
					)}
				</>
			) }
		/>
  )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		width: '80%',
		borderRadius: 6,
		paddingHorizontal: 10,
		paddingVertical: 15,
		marginVertical: 10
	},
	input: {

	}
})

export default CustomInput