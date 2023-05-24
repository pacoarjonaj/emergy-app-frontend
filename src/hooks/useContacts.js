import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import url from '../utils/url'


const sortListAlphabetically = (list) => {
	
	if (!list) {
		return []
	}

	return list.sort((a, b) => a.name.localeCompare(b.name))
}


const useContacts = (email) => {

	const navigation = useNavigation()
	const [responseOK, setResponseOK] = useState(false)
	const [filteredContactList, setFilteredContactList] = useState(null)
	const [originalContactList, setOriginalContactList] = useState([])
	const [searchText, setSearchText] = useState('')

	const fetchContacts = async () => {
		try {
			const response = await fetch(`${url}/api/contacts_by_email/${email}`)

			if (!response.ok) {
				setResponseOK(false)
				return
			}

			const data = await response.json()

			setResponseOK(true)
			setOriginalContactList(data)
			setFilteredContactList(data)
		} catch (error) {
			throw new Error(error)
		}
	}

	useFocusEffect(
		React.useCallback(() => {
			fetchContacts()
		}, [])
	)

	useEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				placeholder: 'Search',
				onChangeText: (event) => {
					setSearchText(event.nativeEvent.text)
				},
				hideWhenScrolling: false,
			},
		})
	}, [navigation])

	useEffect(() => {
		if (responseOK) {
			searchFilterText(searchText)
		}
	}, [searchText])

	const searchFilterText = (text) => {
		if (text !== '') {
			const newContactList = originalContactList.filter((contact) => {
				const contactData = (contact.name || '').toUpperCase()
				const textData = text.toUpperCase()
				return contactData.indexOf(textData) > -1
			})
			setFilteredContactList(newContactList)
		} else {
			setFilteredContactList(originalContactList)
		}
	}

	return email && filteredContactList !== null
		? sortListAlphabetically(filteredContactList)
		: null
}

export default useContacts