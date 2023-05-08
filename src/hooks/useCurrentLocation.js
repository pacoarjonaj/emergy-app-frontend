import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'


const useCurrentLocation = () => {

	const [currentLocation, setCurrentLocation] = useState(null)

	async function reverseGeocode(lat, long) {
		const reverseGeocodeAddress = await Location.reverseGeocodeAsync({
			latitude: lat,
			longitude: long
		})

		return reverseGeocodeAddress[0]
	}

	useEffect(() => {
		const getPermissions = async () => {

			let { status } = await Location.requestForegroundPermissionsAsync();
			if(status !== 'granted') {
				alert('Permission to access location was denied')
				return;
			}

			let location = await Location.getCurrentPositionAsync({})
			let address = await reverseGeocode(location.coords.latitude, location.coords.longitude)

			if(address !== null) {
				setCurrentLocation(address)
			}
		};

		getPermissions();
	}, []);

	return currentLocation
}

export default useCurrentLocation