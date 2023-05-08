import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Animated } from 'react-native-maps'
import { useDispatch } from 'react-redux'
import { changeLocation } from '../redux/methaneSlice'
import theme from '../styles/theme'
import StyledText from '../components/StyledText'
import useCurrentLocation from '../hooks/useCurrentLocation'


const MethaneLocationScreen = () => {

	const currentLocation = useCurrentLocation()
	const dispatch = useDispatch()


	return (
		<View style={styles.container}>
			<View style={{paddingTop: 10}}>
				<StyledText>Your current location:</StyledText>
			</View>

			<View style={{paddingBottom: 10}}>
				<StyledText fontSize='small' fontWeight='light'>(it may take a few seconds, then press OK)</StyledText>
			</View>
			
			<Animated
				showsUserLocation={true}
				followsUserLocation={true}
				style={styles.map}
			/>

			{currentLocation 
			?  	<View style={{flexDirection: 'column'}}>
					<View style={{alignItems: 'center', paddingVertical: 10}}>
						<Pressable
							style={styles.button}
							onPress={(event) => dispatch(changeLocation(currentLocation)) }
						>
							<StyledText color='colorWhite' fontSize='large' fontWeight='medium'>OK</StyledText>
						</Pressable>
					</View>

					<View>
						<StyledText fontSize='medium' fontWeight='light'>{currentLocation.street}</StyledText>
						<StyledText fontSize='medium' fontWeight='light'>{currentLocation.streetNumber}</StyledText>
						<StyledText fontSize='medium' fontWeight='light'>{currentLocation.postalCode}</StyledText>
						<StyledText fontSize='medium' fontWeight='light'>{currentLocation.city}</StyledText>
						<StyledText fontSize='medium' fontWeight='light'>{currentLocation.country}</StyledText>
					</View>
				</View>
			: 
				<View style={{paddingVertical: 10}}>
					<StyledText>Waiting for location...</StyledText>
				</View>
			}

		</View>
	)
}

const styles= StyleSheet.create({
	container: {
		flexDirection: 'column', 
		alignItems: 'center', 
		paddingTop: 6,
		paddingHorizontal: 4
	},
	map: {
		width: '90%',
		height: '70%'
	},
	button: {
		backgroundColor: theme.colors.red,
		borderRadius: 8,
		padding: 6,
	}
})

export default MethaneLocationScreen
