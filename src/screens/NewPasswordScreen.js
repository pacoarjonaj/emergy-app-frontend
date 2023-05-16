import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import componentStyles from '../styles/componentStyles'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'


const NewPasswordScreen = () => {

	const navigation = useNavigation()

	const [code, setCode] = useState('')
	const [newPassword, setNewPassword] = useState('')


	const onSubmitPressed = () => {
		navigation.navigate('Your Account')
	}

	const onSignInPressed = () => {
		navigation.navigate('Sign In')
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>

			<View style={componentStyles.container}>
				<CustomInput 
					placeholder='Code'
					value={code}
					setValue={setCode}
				/>

				<CustomInput 
					placeholder='Enter your new password'
					value={newPassword}
					setValue={setNewPassword}
					secureTextEntry={true}
				/>

				<CustomButton text='Submit' onPress={onSubmitPressed} />

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