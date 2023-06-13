import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import EMAIL_REGEX from '../utils/email_regex'
import url from '../utils/url'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import SocialSignInButtons from '../components/SocialSignInButtons'



const SignUpScreen = () => {

	const navigation = useNavigation()
	const { control, handleSubmit, watch } = useForm()
	const pwd = watch('password')

	const onRegisterPressed = async (data) => {

		const {username, password, name, phone_number } = data

		try {
			const response = await Auth.signUp({
				username,
				password,
				attributes: {name, phone_number}
			})

			navigation.navigate('Confirm Email', {username})

			const postResponse = await fetch(`${url}/api/users`, {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name,
					email: username,
					number: phone_number
				})
			})
			
		}catch(error) {
			alert(error)
			throw new Error(error)
		}
	}

	const onSignInPressed = () => {
		navigation.navigate('Sign In')
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>

			<View style={componentStyles.containerAccount}>
				<StyledText fontSize='xlarge' fontWeight='semibold' style={{margin: 10}}>Create an account</StyledText>

				<CustomInput 
					name='name'
					placeholder='Full Name'
					control={control}
					rules={{
						required: 'Name is required',
						minLength: {
							value: 8, 
							message: 'Name should be at least 8 characters long'
						}
					}}
				/>

				<CustomInput 
					name='username'
					placeholder='Email'
					control={control}
					rules={{
						required: 'Email is required',
						pattern: {
							value: EMAIL_REGEX,
							message: 'Email is invalid'
						}
					}}
					keyboardType='email-address'
				/>

				<CustomInput 
					name='phone_number'
					placeholder='Phone Number'
					control={control}
					rules={{
						required: 'Phone is required',
					}}
					keyboardType='numeric'
					inputMode='tel'
				/>

				<CustomInput 
					name='password'
					placeholder='Password'
					control={control}
					rules={{
						required: 'Password is required',
						minLength: {
							value: 6, 
							message: 'Password should be at least 5 characters long'
						}
					}}
					secureTextEntry
				/>

				<CustomInput 
					name='password-repeat'
					placeholder='Repeat password'
					control={control}
					rules={{
						validate: value => value === pwd || 'Password do not match',
					}}
					secureTextEntry
				/>

				<CustomButton text='Sign Up' onPress={handleSubmit(onRegisterPressed)} />

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