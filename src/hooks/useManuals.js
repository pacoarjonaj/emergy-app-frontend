import React, { useEffect, useState } from 'react'
import url from '../utils/url'

const useManuals = (id) => {

	const endpoint = id !== undefined ? `${url}/api/manuals/${id}` : `${url}/api/manuals`
	const [manuals, setManuals] = useState()

	const loadManuals = async () => {
		const res = await fetch(`${endpoint}`)
		const data = await res.json()
		
		setManuals(data)
	}

	useEffect(() => {
		loadManuals()		
	}, [])


	return manuals
}

export default useManuals