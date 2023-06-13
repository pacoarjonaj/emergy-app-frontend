import React, { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'
import SocialSignInButtons from '../components/SocialSignInButtons'


const SignInScreen = () => {

	const navigation = useNavigation()
	const [loading, setLoading] = useState(false)
	const { control, handleSubmit, formState: {errors} } = useForm()

	const onSignInPressed = async (data) => {
		
		if(loading) {
			return;
		}
		setLoading(true)

		try {
			
			const response = await Auth.signIn(data.username, data.password)

		}catch(error) {
			alert('Incorrect email or password')
		}

		setLoading(false)	
	}

	const onForgotPassword = () => {
		navigation.navigate('Reset your password')
	}

	const onSignUpPressed = () => {
		navigation.navigate('Sign Up')
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>

			<View style={componentStyles.containerAccount}>
				<StyledText fontSize='xlarge' fontWeight='semibold' style={{margin: 10}}>Sign In</StyledText>

				<CustomInput 
					name='username'
					placeholder='Email'
					control={control}
					rules={{ required: 'Email is required' }}
					keyboardType='email-address'
				/>

				<CustomInput 
					name='password'
					placeholder='Password'
					control={control}
					rules={{
						required: 'Password is required', 
						minLength: {
							value: 3, 
							message: 'Password should be minimun 3 charachters long'
						},
					}}
					secureTextEntry
				/> 

				<CustomButton text={loading ? 'Loading...' : 'Sign In'} onPress={handleSubmit (onSignInPressed)} />

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


export default SignInScreen