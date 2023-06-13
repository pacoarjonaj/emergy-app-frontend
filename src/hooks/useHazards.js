import React, { useEffect, useState} from 'react'
import url from '../utils/url'


const useHazards = () => {
	
	const [hazards, setHazards] = useState([])

	const fetchHazards = async () => {
		try{
			const response = await fetch(`${url}/api/type_of_hazards`)
			const data = await response.json()

			if(data !== null) {
				setHazards(data)
			}
		}catch(error) {
			throw new Error(error)
		}
	}

	useEffect(() => {
		fetchHazards()
	}, [])

	return hazards
}

export default useHazards