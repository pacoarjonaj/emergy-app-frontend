import React, {useEffect, useState} from 'react'
import url from '../utils/url'


const useUserId = (email) => {

	const [userId, setUserId] = useState(null)

	const loadUserId = async () => {
			const res = await fetch(`${url}/api/user_id/${email}`)
			const data = await res.json()
			
			setUserId(data)
	}

	useEffect(() => {
		loadUserId()		
	}, [])


	return userId
}

export default useUserId