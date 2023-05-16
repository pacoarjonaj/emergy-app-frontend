import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import theme from '../styles/theme'


const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
	<View style={styles.container}>
		<TextInput 
			value={value}
			onChangeText={setValue}
			style={styles.input} 
			placeholder={placeholder}
			secureTextEntry={secureTextEntry}
		/>
	</View>
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