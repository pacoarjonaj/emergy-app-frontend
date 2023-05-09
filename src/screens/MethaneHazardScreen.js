import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import ModalSelector from 'react-native-modal-selector'
import theme from '../styles/theme'
import { changeHazard } from '../redux/methaneSlice'
import { useDispatch, useSelector } from 'react-redux'
import StyledText from '../components/StyledText'
import accidentHazards from '../data/accidentHazards'


const MethaneHazardScreen = () => {
	
	const [pickedHazard, setPickedHazard] = useState(null)

	const hazard = useSelector((state) => state.methane.hazard)
	const dispatch = useDispatch()

	const buttonStyle = hazard ? styles.pressedButton : styles.button


	return (
		<View style={styles.container}>

			<View style={{  alignItems: 'center' }}>
				<View>
					<StyledText>Select an option from list below: </StyledText>
				</View>
				
				<View style={{ paddingVertical: 10 }}>
					<ModalSelector
						style={{width: 200}}
						optionContainerStyle={{ height: '80%' }}
						data={accidentHazards}
						initValue={(hazard) ? hazard : "Choose an accident type..."}
						onChange={(option) => setPickedHazard(option.label)}
					/>
				</View>

				<View style={{ width: '50%' }}>
					<Pressable
						style={buttonStyle}
						onPress={(e) => dispatch(changeHazard(pickedHazard))}
					>
						<StyledText color='colorWhite' fontSize='large' fontWeight='medium'>OK</StyledText>
					</Pressable>
				</View>
			</View>

			<View style={{ paddingVertical: 10 }}>
				<StyledText fontWeight='medium'>*IED:  
					<StyledText>
						An improvised explosive device (IED) attack is the use of a “homemade” bomb and/or destructive device to destroy, incapacitate, harass, or distract. IEDs are used by criminals, vandals, terrorists, suicide bombers, and insur- gents..
					</StyledText> 
				</StyledText>
			</View>

		</View>
	)
}

const styles= StyleSheet.create({
	container: {
		flexDirection: 'column', 
		flex: 1,
		alignItems: 'center', 
		justifyContent: 'space-around',
		paddingTop: 6,
		paddingHorizontal: 4
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
	}
})

export default MethaneHazardScreen