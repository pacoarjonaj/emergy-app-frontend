import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ContactItem from '../components/ContactItem'
import useContacts from '../hooks/useContacts'


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