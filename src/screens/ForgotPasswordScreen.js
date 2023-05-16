import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import componentStyles from '../styles/componentStyles'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'


const ForgotPasswordScreen = () => {

	const navigation = useNavigation()
	const { control, handleSubmit, watch } = useForm()

	const onSendPressed = async (data) => {
		try {
			await Auth.forgotPassword(data.username)
			navigation.navigate('New password')
		}catch(error) {
			alert(error)
		}
	}

	const onSignInPressed = () => {
		navigation.navigate('Sign In')
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>

			<View style={componentStyles.container}>

				<CustomInput 
					name='username'
					placeholder='Enter your email'
					control={control}
					rules={{ required: 'Email is required' }}
					keyboardType='email-address'
				/>

				<CustomButton text='Send' onPress={handleSubmit(onSendPressed)} />

				<CustomButton 
					text="Back to Sign In"
					onPress={onSignInPressed}
					type='tertiary'
				/>

			</View>

		</ScrollView>
	)

}

export default ForgotPasswordScreen