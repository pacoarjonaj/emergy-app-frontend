import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, View } from 'react-native'
import * as Location from 'expo-location'
import { Animated } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { changeAccess } from '../redux/methaneSlice'
import StyledText from '../components/StyledText'
import theme from '../styles/theme'


const MethaneAccessScreen = () => {

	const [description, setDescription] = useState(null)
	const access =  useSelector((state) => state.methane.access)
	const dispatch = useDispatch()

	const buttonStyle = access ? styles.pressedButton : styles.button

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
		<View style={styles.container}>
			<View style={{paddingTop: 10}}>
				<StyledText>Your current location:</StyledText>
			</View>

			<View style={{paddingBottom: 10}}>
				<StyledText fontSize='small' fontWeight='light'>(it may take a few seconds, then move around map to identify location and type a short description if there is any problem with access for emergency services)</StyledText>
			</View>

			<View style={{width: '90%'}}>
				<TextInput 
					style={styles.input}
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
				style={styles.map}
			/>

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
		height: '60%'
	},
	button: {
		backgroundColor: theme.colors.red,
		borderRadius: 8,
		padding: 6,
	},
	pressedButton: {
		backgroundColor: theme.colors.green,
		borderRadius: 8,
		padding: 6,
	},
	input: {
		height: 80,
		textAlignVertical: 'top',
		margin: 12,
		borderWidth: 1,
		padding: 10
	}
})

export default MethaneAccessScreen