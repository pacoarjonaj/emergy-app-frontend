import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'
import theme from '../styles/theme'


const CustomInput = ({ control, name, placeholder, rules = {}, inputMode, keyboardType, secureTextEntry }) => {
	
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
				<>
					<View style={[styles.container, {borderColor: error ? 'red' : theme.colors.gray }]}>
						<TextInput 
							value={value} 
							onChangeText={onChange} 
							onBlur={onBlur} 
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
		borderColor: theme.colors.gray,
		borderWidth: 1,
		borderRadius: 6,
		paddingHorizontal: 10,
		paddingVertical: 15,
		marginVertical: 10
	},
	input: {

	}
})

export default CustomInput