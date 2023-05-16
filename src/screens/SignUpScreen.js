import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import componentStyles from '../styles/componentStyles'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'


const SignUpScreen = () => {

	const navigation = useNavigation()

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [passwordRepeat, setPasswordRepeat] = useState('')

	const onRegisterPressed = () => {
		navigation.navigate('Confirm Email')
	}

	const onSignInPressed = () => {
		navigation.navigate('Sign In')
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
					placeholder='Email'
					value={email}
					setValue={setEmail}
				/>

				<CustomInput 
					placeholder='Phone Number'
					value={phone}
					setValue={setPhone}
				/>

				<CustomInput 
					placeholder='Password'
					value={password}
					setValue={setPassword}
					secureTextEntry={true}
				/>

				<CustomInput 
					placeholder='Repeat password'
					value={passwordRepeat}
					setValue={setPasswordRepeat}
					secureTextEntry={true}
				/>

				<CustomButton text='Sign Up' onPress={onRegisterPressed} />

				<SocialSignInButtons />

				<CustomButton 
					text="Have an account? Sign in"
					onPress={onSignInPressed}
					type='tertiary'
				/>

			</View>

		</ScrollView>
	)
}

export default SignUpScreen