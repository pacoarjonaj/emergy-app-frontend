import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import EMAIL_REGEX from '../utils/email_regex'
import url from '../utils/url'
import StyledText from '../components/StyledText'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import componentStyles from '../styles/componentStyles'



const ContactNewScreen = () => {

	const navigation = useNavigation()
	const [loading, setLoading] = useState(false)
	const { control, handleSubmit, watch } = useForm()

	const fetchUser = async () => {
		try {

			const user = await Auth.currentAuthenticatedUser()
			const email = user.attributes.email

			const res = await fetch(`${url}/api/user_id/${email}`)
			const user_id = await res.json()

			return user_id
		}catch(error) {
			throw new Error(error)
		}
	}

	const onCreatePressed = async (data) => {

		if(loading) {
			return;
		}
		setLoading(true)

		const user_id = await fetchUser()
		const {name, email, number} = data

		const adaptedData = {
			name: name, 
			email: email,
			number: number,
			user_id: user_id
		}

		try {
			const response = await fetch(`${url}/api/contacts`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(adaptedData)
			})

			navigation.navigate('ContactListScreen')
			
		}catch(error) {
			alert(error)
			throw new Error(error)
		}

		setLoading(false)	
	}

	return (
		<View style={componentStyles.containerAccount}>
			<StyledText fontSize='xlarge' fontWeight='semibold' style={{margin: 10}}>New Contact</StyledText>

			<CustomInput 
				name='name'
				placeholder='Full Name'
				control={control}
				rules={{
					required: 'Name is required'
				}}
			/>

			<CustomInput 
				name='email'
				placeholder='Email'
				control={control}
				rules={{
					pattern: {
						value: EMAIL_REGEX,
						message: 'Email is invalid'
					}
				}}
				keyboardType='email-address'
			/>

			<CustomInput 
				name='number'
				placeholder='Phone Number'
				control={control}
				rules={{
					required: 'Phone is required',
				}}
				keyboardType='numeric'
				inputMode='tel'
			/>

			<CustomButton text={loading ? 'Loading...' : 'Create'} onPress={handleSubmit(onCreatePressed)} />

					
		</View>
  )
}

export default ContactNewScreen