import React, { useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeSeverity } from '../redux/methaneSlice'
import InputSpinnerItem from '../components/InputSpinnerItem'
import StyledText from '../components/StyledText'
import componentStyles from '../styles/componentStyles'


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

	const buttonStyle = (casualtiesDescription || adults || children || fatalities) ? componentStyles.pressedButton : componentStyles.button

	return (
		<View style={componentStyles.container}>

			<View style={{paddingTop: 10}}>
				<StyledText>Determine the number of casualties and if possible the level and severity of injuries:</StyledText>
			</View>
			
			<View style={{width: '90%'}}>
				<TextInput 
					style={componentStyles.input}
					onChangeText={setDescription}
					value={description}
					multiline={true}
					placeholder={ (casualtiesDescription) ? casualtiesDescription : 'Type a short description'}
				/>
			</View>

			<View style={{ alignItems: 'center'}}>
				<InputSpinnerItem label='Adults' value={adults} onChange={setAdultsNum}/>
			</View>
			
			<View style={{ alignItems: 'center'}}>
				<InputSpinnerItem label='Children' value={children} onChange={setChildrenNum}/>
			</View>
			
			<View style={{ alignItems: 'center'}}>
				<InputSpinnerItem label='Fatalities' value={fatalities} onChange={setFatalitiesNum}/>
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


export default MethaneSeverityScreen