import React, { useEffect } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import SeparatorItem from '../components/SeparatorItem'
import StyledText from '../components/StyledText'
import ContactItem from '../components/ContactItem'
import useContacts from '../hooks/useContacts'


const ContactListScreen = () => {

	const insets = useSafeAreaInsets()
	const route = useRoute()
	const {email} = route?.params
	const contacts = useContacts(email)
	const navigation = useNavigation()

	useEffect(() => {
		navigation.setOptions({
			headerLargeTitle: true,
			headerTitle: 'Contacts',
			headerRight: () => (
				<Pressable onPress={() => { navigation.navigate('ContactAddScreen') }}>
					<Ionicons name='ios-add' size={36} color='#b0463b' style={{ marginRight: 16 }} />
				</Pressable>
			)
		})
	}, [navigation])

	if (contacts === null || contacts.length === 0) {
		return (
			<View style={{ flex: 1, paddingTop: insets.top, alignItems: 'center', justifyContent: 'center' }}>
				<StyledText>No contacts found</StyledText>
			</View>
		)
	}

	return (
		<View style={{ flex: 1, paddingTop: insets.top }}>
			<FlatList
				data={contacts}
				ItemSeparatorComponent={SeparatorItem}
				renderItem={({ item: contact }) => (
								<ContactItem {...contact} />
							)}
				contentInsetAdjustmentBehavior='automatic'
			/>
		</View>
	)
}


export default ContactListScreen