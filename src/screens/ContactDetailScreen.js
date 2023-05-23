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

	if (contact === null) {
		return (
			<View style={componentStyles.container}>
				<ActivityIndicator />
			</View>
		)
	}

	return (
		<View style={[styles.container, { paddingTop: insets.top + 50 }]}>
			{contact && (
				<View style={styles.contentContainer}>
					<View>
						<StyledText fontSize='large' fontWeight='semibold'>{contact.name}</StyledText>
						<StyledText fontWeight='medium'>{contact.email}</StyledText>
						<StyledText fontWeight='medium'>{contact.number}</StyledText>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button} onPress={handleSendSMS}>
							<StyledText fontSize='large' fontWeight='semibold' color='colorWhite'>Send SMS</StyledText>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={handleCall}>
							<StyledText fontSize='large' fontWeight='semibold' color='colorWhite'>Call</StyledText>
						</TouchableOpacity>
					</View>
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
	},
	contentContainer: {
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 20,
	},
	button: {
		backgroundColor: theme.colors.blue,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 6,
		marginRight: 10,
	},
})

export default ContactDetailScreen