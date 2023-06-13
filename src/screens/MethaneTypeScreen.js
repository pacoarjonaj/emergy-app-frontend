import React, { useState } from 'react'
import { ActivityIndicator, View, Pressable } from 'react-native'
import ModalSelector from 'react-native-modal-selector'
import { changeType } from '../redux/methaneSlice'
import { useDispatch, useSelector } from 'react-redux'
import useTypes from '../hooks/useTypes'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'


const MethaneTypeScreen = () => {

	const types = useTypes()
	const [pickedType, setPickedType] = useState(null)

	const type = useSelector((state) => state.methane.type)
	const dispatch = useDispatch()

	const buttonStyle = type ? componentStyles.pressedButton : componentStyles.button

	console.log(types)
	
	return (
		<View style={{ justifyContent: 'space-around', ...componentStyles.container}}>
			{types.length > 0 ? (
				<>
					<View style={{  alignItems: 'center' }}>
						<View>
							<StyledText>Select an option from list below: </StyledText>
						</View>
						
						<View style={{ paddingVertical: 10 }}>
							<ModalSelector
								style={{width: 200}}
								optionContainerStyle={{ height: '80%' }}
								data={types}
								initValue={(type) ? type : "Choose an accident type..."}
								onChange={(option) => setPickedType(option.incident_type_label)}
								keyExtractor={(type) => type.incident_type_id}
								labelExtractor={(type) => type.incident_type_label}
							/>
						</View>

						<View style={{ width: '50%' }}>
							<Pressable
								style={buttonStyle}
								onPress={(e) => dispatch(changeType(pickedType))}
							>
								<StyledText color='colorWhite' fontSize='large' fontWeight='medium'>OK</StyledText>
							</Pressable>
						</View>
					</View>

					<View style={{ paddingVertical: 10 }}>
						<StyledText fontWeight='medium'>*CBRN:  
							<StyledText>
								CBRN is the acronym for nuclear, radiological, biological and chemical agents. These agents include: material from nuclear fission or fusion, or other radioactive material with the potential to affect human health; biological agents causing infection or disease; and toxic chemicals that can cause poisoning.
							</StyledText> 
						</StyledText>

						<StyledText fontWeight='medium' style={{ paddingTop: 10 }}>*HAZMAT: 
							<StyledText>		
								A dangerous good (also known as hazardous material or hazmat) is any substance or material that is capable of posing an unreasonable risk to health, safety, and property when transported in commerce.
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


export default MethaneTypeScreen