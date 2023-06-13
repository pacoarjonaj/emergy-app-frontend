import React, { useState } from 'react'
import { ActivityIndicator, View, Pressable } from 'react-native'
import ModalSelector from 'react-native-modal-selector'
import { changeHazard } from '../redux/methaneSlice'
import { useDispatch, useSelector } from 'react-redux'
import useHazards from '../hooks/useHazards'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'


const MethaneHazardScreen = () => {
	
	const hazards = useHazards()
	const [pickedHazard, setPickedHazard] = useState(null)

	const hazard = useSelector((state) => state.methane.hazard)
	const dispatch = useDispatch()

	const buttonStyle = hazard ? componentStyles.pressedButton : componentStyles.button

	return (
		<View style={{ justifyContent: 'space-around', ...componentStyles.container}}>
			{hazards.length > 0 ? (
				<>
					<View style={{  alignItems: 'center' }}>
					<View>
						<StyledText>Select an option from list below: </StyledText>
					</View>
					
					<View style={{ paddingVertical: 10 }}>
						<ModalSelector
							style={{width: 200}}
							optionContainerStyle={{ height: '80%' }}
							data={hazards}
							initValue={(hazard) ? hazard : "Choose an accident type..."}
							onChange={(option) => setPickedHazard(option.hazard_name)}
							keyExtractor={(hazard) => hazard.hazard_id}
							labelExtractor={(hazard) => hazard.hazard_name}
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
			</>
			) : (
				<View style={componentStyles.loadingContainer}>
					<ActivityIndicator/>
				</View>	
			)}
		</View>
	)
}


export default MethaneHazardScreen