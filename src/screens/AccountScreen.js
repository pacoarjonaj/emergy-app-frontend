import React from 'react'
import { Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import componentStyles from '../styles/componentStyles'

const AccountScreen = () => {

	const navigation = useNavigation()

	return (
		<View style={componentStyles.container}>
			<Button title='Sign In' onPress={() => { navigation.navigate('Sign In') }} />
			<Button title='Sign Up' onPress={() => { navigation.navigate('Sign Up') }} />
			<Button title='Confirm Email' onPress={() => { navigation.navigate('Confirm Email') }} />
			<Button title='Reset your password' onPress={() => { navigation.navigate('Reset your password') }} />
			<Button title='New password' onPress={() => { navigation.navigate('New password') }} />
		</View>
	)
}

export default AccountScreen