import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Linking, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import url from '../utils/url'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'
import theme from '../styles/theme'


const ContactDetailScreen = () => {

	const insets = useSafeAreaInsets()
	const route = useRoute()
	const { id } = route.params
	const [contact, setContact] = useState(null)

	const fetchContact = async () => {
		try {
			const response = await fetch(`${url}/api/contacts/${id}`)
			const data = await response.json()

			setContact(data)
		} catch (error) {
		  console.error('Error fetching contact:', error)
		}
	}

	useEffect(() => {
		fetchContact()
	}, [])

	const handleSendSMS = () => {
		if (contact && contact.number) {
			Linking.openURL(`sms:${contact.number}`)
		}
	}

	const handleCall = () => {
		if (contact && contact.number) {
			Linking.openURL(`tel:${contact.number}`)
		}
	}

	return (
		<View style={styles.container}>

			{contact ? (
				<>
					<View style={{alignItems: 'center'}}>
						<StyledText fontSize="xlarge" fontWeight="semibold" style={styles.title}>Contact data:</StyledText>

						<StyledText fontSize='large' fontWeight='bold' style={styles.label}>Name:</StyledText>
						<StyledText style={styles.text}>{contact.name}</StyledText>

						<StyledText fontSize='large' fontWeight='bold' style={styles.label}>Email:</StyledText>
						<StyledText style={styles.text}>{contact.email}</StyledText>

						<StyledText fontSize='large' fontWeight='bold' style={styles.label}>Phone Number:</StyledText>
						<StyledText style={styles.text}>{contact.number}</StyledText>
					</View>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.button} onPress={handleSendSMS}>
								<StyledText fontSize='large' fontWeight='semibold' color='colorWhite'>Send SMS</StyledText>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={handleCall}>
								<StyledText fontSize='large' fontWeight='semibold' color='colorWhite'>Call</StyledText>
							</TouchableOpacity>
						</View>
				</>
			) : (
				<View style={componentStyles.loadingContainer}>
					<ActivityIndicator/>
				</View>	
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		marginVertical: 10,
	},
	label: {
		marginBottom: 5,
	},
	text: {
		marginBottom: 15,
	},
	signOutText: {
		color: 'red',
		fontSize: 20,
		marginTop: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 10,
	},
	button: {
		backgroundColor: theme.colors.blue,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 6,
		marginRight: 10,
	},
	loadingContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default ContactDetailScreen