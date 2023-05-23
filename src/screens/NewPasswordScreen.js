import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'


const NewPasswordScreen = () => {

	const navigation = useNavigation()
	const { control, handleSubmit, watch } = useForm()

	const onSubmitPressed = async (data) => {
		try {
			await Auth.forgotPasswordSubmit(data.username, data.code, data.password)
			navigation.navigate('Sign In')
		}catch(error) {
			alert(error)
		}
	}

	const onSignInPressed = () => {
		navigation.navigate('Sign In')
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>

			<View style={componentStyles.containerAccount}>
				<StyledText fontSize='xlarge' fontWeight='semibold' style={{margin: 10}}>Reset your password</StyledText>

				<CustomInput 
					name='username'
					placeholder='Email'
					control={control}
					rules={{ required: 'Email is required' }}
					keyboardType='email-address'
				/>

				<CustomInput 
					name='code'
					placeholder='Code'
					control={control}
					rules={{ required: 'Confirmation code is required' }}
				/>

				<CustomInput 
					name='password'
					placeholder='Enter your new password'
					control={control}
					rules={{
						required: 'Password is required',
						minLength: {
							value: 5, 
							message: 'Password should be at least 5 characters long'
						}
					}}
					secureTextEntry
				/>

				<CustomButton text='Submit' onPress={handleSubmit(onSubmitPressed)} />

				<CustomButton 
					text="Back to Sign In"
					onPress={onSignInPressed}
					type='tertiary'
				/>

			</View>

		</ScrollView>
	)

}

export default NewPasswordScreen