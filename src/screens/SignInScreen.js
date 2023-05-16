import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import componentStyles from '../styles/componentStyles'
import SocialSignInButtons from '../components/SocialSignInButtons'


const SignInScreen = () => {

	const navigation = useNavigation()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')


	const onSignInPressed = () => {
		navigation.navigate('Your Account')
	}

	const onForgotPassword = () => {
		navigation.navigate('Reset your password')
	}

	const onSignUpPressed = () => {
		navigation.navigate('Sign Up')
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>

			<View style={componentStyles.container}>
				<CustomInput 
					placeholder='Username'
					value={username}
					setValue={setUsername}
				/>

				<CustomInput 
					placeholder='Password'
					value={password}
					setValue={setPassword}
					secureTextEntry={true}
				/>


				<CustomButton text='Sign In' onPress={onSignInPressed} />

				<CustomButton text='Forgot Password?' onPress={onForgotPassword} type='tertiary'/>

				<SocialSignInButtons />

				<CustomButton 
					text="Don't have an account? Create one"
					onPress={onSignUpPressed}
					type='tertiary'
				/>

			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {

	}
})

export default SignInScreen