import React, { useState } from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { changeDeclaration } from '../redux/methaneSlice'
import { useDispatch, useSelector } from 'react-redux'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'



const MethaneMajorScreen = () => {

	const [pickedDate, setPickedDate] = useState(new Date())
	const isMajor = useSelector((state) => state.methane.isMajor)
	const dispatch = useDispatch()

	const onChange = (event, date) => {
		setPickedDate(date || pickedDate);
	}

	const handlePress = () => {
		dispatch(changeDeclaration({"date": pickedDate.toString(), "isMajor": 1}))
	}

	const buttonStyle = isMajor ? componentStyles.pressedButtonMajor : componentStyles.buttonMajor

	return (
		<ScrollView>
			<View style={componentStyles.container}>
				<View style={{paddingTop: 10}}>
					<StyledText>A major incident is defined as:</StyledText>
				</View>

				<View style={{padding: 10}}>
					<StyledText fontWeight='semibold'>An event or situation with a range of serious consequences which requires special arrangements to be implemented by one or more emergency responder agency.</StyledText>
				</View>

				<View>
					<RNDateTimePicker 
						value={pickedDate}
						onChange={onChange}
					/>
				</View>

				<Pressable
					onPress={() => handlePress()}
				>
					<View style={buttonStyle}>
						<StyledText fontSize='xlarge' fontWeight='medium' color='colorWhite'>Major Incident DECLARED</StyledText>
					</View>
				</Pressable>

				<View>
					<StyledText fontWeight='semibold'>Notes:</StyledText>
				</View>

				<View style={{margin: 4}}>
					<StyledText>* "Emergency responder agency" describes all category one and two responders as defined in the Civil Contingencies Act (2004) and associated guidance.</StyledText>

					<StyledText>*A major incident is beyond the scope of business-as-usual operations, and is likely to involve serious harm, damage, disruption or risk to human life or welfare, essential services, the environment or national security.</StyledText>

					<StyledText>*A major incident may involve a single-agency response, although it is more likely to require a multi-agency response, which may be in the form of multi-agency support to a lead responder.</StyledText>

					<StyledText>*The severity of the consequences associated with a major incident are likely to constrain or complicate the ability of responders to resource and manage the incident, although a major incident is unlikely to affect all responders equally.</StyledText>

					<StyledText>*The decision to declare a major incident will always be a judgement made in a specific local and operational context, and there are no precise and universal thresholds or triggers. Where LRFs and responders have explored these criteria in the local context and ahead of time, decision makers will be better informed and more confident in making that judgement.</StyledText>
				</View>
					
			</View>
		</ScrollView>
	)
}


export default MethaneMajorScreen