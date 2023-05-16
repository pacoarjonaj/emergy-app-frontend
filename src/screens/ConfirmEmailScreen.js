import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import componentStyles from '../styles/componentStyles'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'


const ConfirmEmailScreen = () => {

	const navigation = useNavigation()

	const [code, setCode] = useState('')

	const onConfirmPressed = () => {
		navigation.navigate('Your Account')
	}

	const onResendPressed = () => {
		alert('On Resend Pressed')
	}

	const onSignInPressed = () => {
		navigation.navigate('Sign In')
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>

			<View style={componentStyles.container}>
				<CustomInput 
					placeholder='Enter your confirmation code'
					value={code}
					setValue={setCode}
				/>

				<CustomButton text='Confirm' onPress={onConfirmPressed} />

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