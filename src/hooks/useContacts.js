import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import contacts from '../../contacts'


const useContacts = () => {

	const navigation = useNavigation()
	const [contactList, setContactList] = useState(contacts)
	const [filteredContactList, setFilteredContactList] = useState(contacts)

	function sortListAlphabetically(list) {
		return list.sort((a, b) => a.name.localeCompare(b.name));
	}

	useEffect(() => {
		navigation.setOptions({
			headerLargeTitle: true,
			headerTitle: 'Contacts',
			headerSearchBarOptions: {
				placeholder: 'Search',
				onChangeText: (event) => {
					searchFilterText(event.nativeEvent.text)
				},
				hideWhenScrolling: false
			}
		})
	}, [])

	const searchFilterText = (text) => {	
		if(text !== null) {
			const newContactList = contactList.filter(contact => {
				const contactData = contact.name.toUpperCase() ? contact.name.toUpperCase() : ''.toUpperCase()
				const textData = text.toUpperCase()
				return contactData.indexOf(textData) > -1;
			})
			setFilteredContactList(newContactList)
		}else {
			setFilteredContactList(contactList)
		}
	}

	return sortListAlphabetically(filteredContactList)

}

export default useContacts