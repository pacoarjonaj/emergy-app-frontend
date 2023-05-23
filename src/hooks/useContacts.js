import React, { useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import url from '../utils/url'


const useContacts = (email) => {

	const navigation = useNavigation()
	const [filteredContactList, setFilteredContactList] = useState([])

	function sortListAlphabetically(list) {
		return list.sort((a, b) => a.name.localeCompare(b.name));
	}

	const fetchContacts = async () => {
		try{
			const response = await fetch(`${url}/api/contacts_by_email/${email}`)
			const data = await response.json()

			setFilteredContactList(data)
		}catch(error) {
			throw new Error(error)
		}
	}

	useFocusEffect(
		React.useCallback(() => {
			fetchContacts();
		}, []) 
	)

	useEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				placeholder: 'Search',
				onChangeText: (event) => {
					searchFilterText(event.nativeEvent.text)
				},
				hideWhenScrolling: false
			}
		})
	}, [navigation])

	const searchFilterText = (text) => {	
		if(text !== null) {
			const newContactList = filteredContactList.filter(contact => {
				const contactData = (contact.name || '').toUpperCase()
				const textData = text.toUpperCase()
				return contactData.indexOf(textData) > -1;
			})
			setFilteredContactList(newContactList)
		}else {
			setFilteredContactList(filteredContactList)
		}
	}

	return email && filteredContactList ? sortListAlphabetically(filteredContactList) : null

}

export default useContacts