import React, { useEffect, useState} from 'react'
import url from '../utils/url'


const useTypes = () => {
	
	const [types, setTypes] = useState([])

	const fetchTypesOfIncident = async () => {
		try{
			const response = await fetch(`${url}/api/type_of_incidents`)
			const data = await response.json()

			if(data !== null) {
				setTypes(data)
			}
		}catch(error) {
			throw new Error(error)
		}
	}

	useEffect(() => {
		fetchTypesOfIncident()
	}, [])

	return types
}

export default useTypes