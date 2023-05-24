import React, { useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import url from '../utils/url'


const sortByDateDescending = (list) => {

	return list.sort((a, b) => {
		const dateA = new Date(a.date)
		const dateB = new Date(b.date)
		return dateB - dateA
	})
}


const useIncidents = (email) => {

	const navigation = useNavigation()
	const [responseOK, setResponseOK] = useState(false)
	const [filteredIncidentList, setFilteredIncidentList] = useState([])
	const [originalIncidentList, setOriginalIncidentList] = useState([])
	const [searchText, setSearchText] = useState('')

	const fetchIncidents = async () => {
		try {
			const response = await fetch(`${url}/api/incidents_by_user_email/${email}`)

			if (!response.ok) {
				setResponseOK(false)
				return
			}

			const data = await response.json()

			setResponseOK(true)
			setFilteredIncidentList(data)
			setOriginalIncidentList(data)
		} catch (error) {
			throw new Error(error)
		}
	}

	useFocusEffect(
		React.useCallback(() => {
			fetchIncidents()
		}, [])
	)

	useEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				placeholder: 'Search by street',
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
			const newIncidentList = originalIncidentList.filter((incident) => {
				const incidentData = (incident.location || '').toUpperCase()
				const textData = text.toUpperCase()
				return incidentData.indexOf(textData) > -1
			})
			setFilteredIncidentList(newIncidentList)
		} else {
			setFilteredIncidentList(originalIncidentList)
		}
	}

	return email && filteredIncidentList !== null ? sortByDateDescending(filteredIncidentList) : null
}

export default useIncidents
