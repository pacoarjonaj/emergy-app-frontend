import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from './CustomButton'



const SocialSignInButtons = () => {

	const onPress = () => {
		console.log('Click')
	}

	return (
		<>
			<CustomButton 
					text='Sing In with Facebook'
					onPress={onPress}
					bgColor='#e7eaf4'
					fgColor='#4765a9'
			/>

			<CustomButton 
				text='Sing In with Google'
				onPress={onPress}
				bgColor='#fae9ea'
				fgColor='#dd4d44'
			/>

			<CustomButton 
				text='Sing In with Apple'
				onPress={onPress}
				bgColor='#e3e3e3'
				fgColor='#363636'
			/>
		</>
	)
}

export default SocialSignInButtons