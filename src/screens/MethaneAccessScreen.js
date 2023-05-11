import React, { useEffect, useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import * as Location from 'expo-location'
import { Animated } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { changeAccess } from '../redux/methaneSlice'
import StyledText from '../components/StyledText'
import componentStyles from '../styles/componentStyles'


const MethaneAccessScreen = () => {

	const [description, setDescription] = useState(null)
	const access =  useSelector((state) => state.methane.access)
	const dispatch = useDispatch()

	const buttonStyle = access ? componentStyles.pressedButton : componentStyles.button

	useEffect(() => {
		const getPermissions = async () => {

			let { status } = await Location.requestForegroundPermissionsAsync();
			if(status !== 'granted') {
				alert('Permission to access location was denied')
				return;
			}
		}
		
		getPermissions();
	}, [])

	return (
		<View style={componentStyles.container}>
			<View style={{paddingTop: 10}}>
				<StyledText>Your current location:</StyledText>
			</View>

			<View style={{paddingBottom: 10}}>
				<StyledText fontSize='small' fontWeight='light'>(it may take a few seconds, then move around map to identify location and type a short description if there is any problem with access for emergency services)</StyledText>
			</View>

			<View style={{width: '90%'}}>
				<TextInput 
					style={componentStyles.input}
					onChangeText={setDescription}
					value={description}
					multiline={true}
					placeholder={(access) ? access : 'Type a short description'}
				/>
			</View>

			<View style={{alignItems: 'center', paddingBottom: 15 }}>
				<Pressable
					style={buttonStyle}
					onPress={(event) => dispatch(changeAccess(description))}
				>
					<StyledText color='colorWhite' fontSize='large' fontWeight='medium'>OK</StyledText>
				</Pressable>
			</View>

			<Animated
				showsUserLocation={true}
				followsUserLocation={true}
				style={componentStyles.map}
			/>

		</View>
	)
}


export default MethaneAccessScreen