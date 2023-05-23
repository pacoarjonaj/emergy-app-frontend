import React, { useEffect, useState} from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import url from '../utils/url'


const useIncidents = (email) => {

	const navigation = useNavigation()
	const [filteredIncidentList, setFilteredIncidentList] = useState([])

	const sortByDateDescending = (list) => {
		return list.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			return dateB - dateA;
		})
	}

	const fetchIncidents = async () => {
		try{
			const response = await fetch(`${url}/api/incidents_by_user_email/${email}`)
			const data = await response.json()

			setFilteredIncidentList(data)
		}catch(error) {
			throw new Error(error)
		}
	}

	useFocusEffect(
		React.useCallback(() => {
			fetchIncidents();
		}, []) 
	)

	useEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				placeholder: 'Search by street',
				onChangeText: (event) => {
					searchFilterText(event.nativeEvent.text)
				},
				hideWhenScrolling: false
			}
		})
	}, [navigation])

	const searchFilterText = (text) => {	
		if(text !== null) {
			const newIncidentList = filteredIncidentList.filter(incident => {
				const incidentData = incident.location && incident.location.toUpperCase()
				const textData = text.toUpperCase()
				return incidentData.indexOf(textData) > -1;
			})
			setFilteredIncidentList(newIncidentList)
		}else {
			setFilteredIncidentList(filteredIncidentList)
		}
	}

	return email && filteredIncidentList ? sortByDateDescending(filteredIncidentList) : null

}

export default useIncidents