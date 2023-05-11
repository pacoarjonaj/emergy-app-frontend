import React, { useState } from 'react'
import { Keyboard, Pressable, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeService } from '../redux/methaneSlice'
import InputSpinnerItem from '../components/InputSpinnerItem'
import StyledText from '../components/StyledText'
import componentStyles from '../styles/componentStyles'


const MethaneEmergyScreen = () => {

	const [description, setDescription] = useState(null)
	const [sanitaryNum, setSanitaryNum] = useState(0)
	const [firefightingNum, setFirefightingNum] = useState(0)
	const [rescueNum, setRescueNum] = useState(0)

	const servicesDescription = useSelector((state) => state.methane.servicesDescription)
	const sanitary = useSelector((state) => state.methane.sanitary)
	const firefighting = useSelector((state) => state.methane.firefighting)
	const rescue = useSelector((state) => state.methane.rescue)

	const dispatch = useDispatch()

	const handlePress = () => {

		const res = {
			servicesDescription: description,
			sanitary: sanitaryNum,
			firefighting: firefightingNum,
			rescue: rescueNum
		}

		console.log(description)
		console.log(res.sanitary, res.firefighting, res.rescue)

		dispatch(changeService(res))
		
	}

	const buttonStyle = (servicesDescription || sanitary || firefighting || rescue) ? componentStyles.pressedButton : componentStyles.button


	return (
		<View style={componentStyles.container}>
			
			<View style={{paddingTop: 10}}>
				<StyledText>Determine what security forces are necessary :</StyledText>
			</View>

			<View style={{width: '90%'}}>
				<TextInput 
					style={componentStyles.input}
					onChangeText={setDescription}
					value={description}
					multiline={true}
					placeholder={ (servicesDescription) ? servicesDescription : 'Type a short description'}
				/>
			</View>

			<View style={{ alignItems: 'center'}}>
				<InputSpinnerItem label='Sanitary: ' value={sanitary} onChange={setSanitaryNum}/>
			</View>

			<View style={{ alignItems: 'center'}}>
				<InputSpinnerItem label='Fire: ' value={firefighting} onChange={setFirefightingNum}/>
			</View>

			<View style={{ alignItems: 'center'}}>
				<InputSpinnerItem label='Rescue or Citizen security: ' value={rescue} onChange={setRescueNum}/>
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

export default MethaneEmergyScreen