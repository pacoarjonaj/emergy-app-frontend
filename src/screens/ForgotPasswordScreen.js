import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import componentStyles from '../styles/componentStyles'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'


const ForgotPasswordScreen = () => {

	const navigation = useNavigation()

	const [username, setUsername] = useState('')

	const onSendPressed = () => {
		navigation.navigate('Your Account')
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

				<CustomButton text='Send' onPress={onSendPressed} />

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