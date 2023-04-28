import React, { useEffect } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ContactItem from '../components/ContactItem'
import useContacts from '../hooks/useContacts'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'


const ItemSeparator = () => {
	return ( 
		<View 
			style={{
				height: 0.5,
				width: '90%',
				alignSelf: 'center',
				backgroundColor: '#bcbcbc'
			}} 
		/>
	)
}

const ContactListScreen = () => {

	const insets = useSafeAreaInsets()
	const contacts = useContacts()
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

	return (
		<View style={{ flex: 1, paddingTop: insets.top }}>
			<FlatList
				data={contacts}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={({ item: contact }) => (
						<ContactItem {...contact}/>
				)}
				contentInsetAdjustmentBehavior='automatic'
			/>
		</View>
	)
}


export default ContactListScreen