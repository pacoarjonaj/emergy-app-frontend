import React from 'react'
import { View, ScrollView } from 'react-native'
import { Auth } from 'aws-amplify'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import componentStyles from '../styles/componentStyles'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'


const ConfirmEmailScreen = () => {

	const route = useRoute()
	const navigation = useNavigation()
	const { control, handleSubmit, watch } = useForm({
		defaultValues: {username: route?.params?.username
	}})
	const username = watch('username')

	const onConfirmPressed = async (data) => {
		try {
			const response = await Auth.confirmSignUp(data.username, data.code)
			navigation.navigate('Sign In')
		}catch(error) {
			alert(error)
		}
	}

	const onResendPressed = async () => {
		try {
			const response = await Auth.resendSignUp(username)
			alert('Success', 'Code was resent to your email')
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
					placeholder='Email'
					control={control}
					rules={{ required: 'Email is required' }}
					keyboardType='email-address'
				/>

				<CustomInput 
					name='code'
					placeholder='Enter your confirmation code'
					control={control}
					rules={{ required: 'Confirmation code is required' }}
				/>

				<CustomButton text='Confirm' onPress={handleSubmit(onConfirmPressed)} />

				<CustomButton 
					text="Resend code"
					onPress={onResendPressed}
					type='secondary'
				/>

				<CustomButton 
					text="Back to Sign In"
					onPress={onSignInPressed}
					type='tertiary'
				/>

			</View>

		</ScrollView>
	)

}

export default ConfirmEmailScreen