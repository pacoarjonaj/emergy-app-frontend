import React from 'react'
import { View, Pressable } from 'react-native'
import { Animated } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { changeLocation } from '../redux/methaneSlice'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'
import useCurrentLocation from '../hooks/useCurrentLocation'


const MethaneLocationScreen = () => {

	const currentLocation = useCurrentLocation()
	const street = useSelector((state) => state.methane.street)
	const dispatch = useDispatch()

	const buttonStyle = street ? componentStyles.pressedButton : componentStyles.button

	return (
		<View style={componentStyles.container}>
			<View style={{paddingTop: 10}}>
				<StyledText>Your current location:</StyledText>
			</View>

			<View style={{paddingBottom: 10}}>
				<StyledText fontSize='small' fontWeight='light'>(it may take a few seconds, then press OK)</StyledText>
			</View>
			
			<Animated
				showsUserLocation={true}
				followsUserLocation={true}
				style={componentStyles.map}
			/>

			{currentLocation 
			?  	<View style={{flexDirection: 'column'}}>
					<View style={{alignItems: 'center', paddingVertical: 10}}>
						<Pressable
							style={buttonStyle}
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


export default MethaneLocationScreen
