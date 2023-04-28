import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import StyledText from '../components/StyledText'
import { useRoute } from '@react-navigation/native'
import contacts from '../../contacts'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const ContactDetailScreen = () => {

	const insets = useSafeAreaInsets()
	const route = useRoute()
	const { id } = route.params
	const contact = contacts.find((item) => item.contact_id === id)


	return (
		<View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: insets.top + 50}}>
			<View style={{ paddingBottom: 20}}>
				<Image style={styles.image} source={{ uri: contact.image }} />
			</View>
			<View>
				<StyledText fontSize='large' fontWeight='medium'>{contact.name}</StyledText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 80, 
		height: 80, 
		borderRadius: 4 
	}
})

export default ContactDetailScreen