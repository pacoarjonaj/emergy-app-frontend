import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import incidents from '../data/incidents'


const useIncidents = () => {

	const navigation = useNavigation()
	const incidentList = incidents
	const [filteredIncidentList, setFilteredIncidentList] = useState(incidents)

	function sortByDateDescending(list) {
		return list.sort((a, b) => {
		  const dateA = new Date(a.date);
		  const dateB = new Date(b.date);
		  return dateB - dateA;
		})
	}

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
			const newIncidentList = incidentList.filter(incident => {
				const incidentData = incident.street.toUpperCase() ? incident.street.toUpperCase() : ''.toUpperCase()
				const textData = text.toUpperCase()
				return incidentData.indexOf(textData) > -1;
			})
			setFilteredIncidentList(newIncidentList)
		}else {
			setFilteredIncidentList(incidentList)
		}
	}

	return sortByDateDescending(filteredIncidentList)

}

export default useIncidents