import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import contacts from '../../contacts'
import ContactItem from '../components/ContactItem'


const ItemSeparator = () => {
	return ( <View style={styles.separator}></View> )
}

const ContactsScreen = () => {

	const insets = useSafeAreaInsets()

	const sortedContactList = contacts.sort((a, b) => {
		return a.name.localeCompare(b.name)
	})

	return (
	<View style={{ flex: 1, paddingTop: insets.top + 40 }}>
		<FlatList
			data={sortedContactList}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item: contact }) => (
				<ContactItem {...contact} />
			)}
		/>
	</View>
	)
}

const styles = StyleSheet.create({
	separator: {
		height: 0.5,
		width: '90%',
		alignSelf: 'center',
		backgroundColor: '#bcbcbc'
	}
}) 

export default ContactsScreen