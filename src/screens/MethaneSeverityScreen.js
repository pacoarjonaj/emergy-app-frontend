import React, { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import InputSpinner from 'react-native-input-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { changeSeverity } from '../redux/methaneSlice'
import theme from '../styles/theme'
import InputSpinnerItem from '../components/InputSpinnerItem'
import StyledText from '../components/StyledText'


const MethaneSeverityScreen = () => {

	const [description, setDescription] = useState(null)
	const [adultsNum, setAdultsNum] = useState(0)
	const [childrenNum, setChildrenNum] = useState(0)
	const [fatalitiesNum, setFatalitiesNum] = useState(0)

	const casualtiesDescription = useSelector((state) => state.methane.casualtiesDescription)
	const adults = useSelector((state) => state.methane.adults)
	const children = useSelector((state) => state.methane.children)
	const fatalities = useSelector((state) => state.methane.adults)

	const dispatch = useDispatch()

	const handlePress = () => {

		const res = {
			casualtiesDescription: description,
			adults: adultsNum,
			children: childrenNum,
			fatalities: fatalitiesNum
		}

		console.log(description)
		console.log(res.adults, res.children, res.fatalities)

		dispatch(changeSeverity(res))
		
	}

	const buttonStyle = (casualtiesDescription || adults || children || fatalities) ? styles.pressedButton : styles.button

	return (
		<View style={styles.container}>

			<View style={{paddingTop: 10}}>
				<StyledText>Determine the number of casualties and if possible the level and severity of injuries:</StyledText>
			</View>
			
			<View style={{width: '90%'}}>
				<TextInput 
					style={styles.input}
					onChangeText={setDescription}
					value={description}
					multiline={true}
					placeholder={ (casualtiesDescription) ? casualtiesDescription : 'Type a short description'}
				/>
			</View>

			<View style={styles.conainerIputSpinner}>
				<View style={styles.labelSpinner}>
					<StyledText>Adults:</StyledText>
				</View>

				<InputSpinner label={'Adults'} value={adults} onChange={setAdultsNum}/>
			</View>
			
			<View style={styles.conainerIputSpinner}>
				<View style={styles.labelSpinner}>
					<StyledText>Children:</StyledText>
				</View>

				<InputSpinner value={children} onChange={setChildrenNum}/>
			</View>

			<View style={styles.conainerIputSpinner}>
				<View style={styles.labelSpinner}>
					<StyledText>Fatalities:</StyledText>
				</View>

				<InputSpinner value={fatalities} onChange={setFatalitiesNum}/>
			</View>

			<View style={{alignItems: 'center', paddingVertical: 20 }}>
				<Pressable
					style={buttonStyle}
					onPress={(event) => handlePress() }
				>
					<StyledText color='colorWhite' fontSize='large' fontWeight='medium'>OK</StyledText>
				</Pressable>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column', 
		alignItems: 'center', 
		paddingTop: 6,
		paddingHorizontal: 4
	},
	conainerIputSpinner: {
		flexDirection: 'row', 
		alignItems: 'center',
		justifyContent: 'center', 
		paddingBottom: 15,
		width: '30%'
	},
	labelSpinner: {
		width: 90, 
		paddingRight: 20
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

export default MethaneSeverityScreen