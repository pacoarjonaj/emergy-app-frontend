import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from '../redux/methaneSlice'
import componentStyles from '../styles/componentStyles'
import infoMethane from '../data/infoMethane'
import MethaneItem from '../components/MethaneItem'
import SeparatorItem from '../components/SeparatorItem'
import StyledText from '../components/StyledText'
import url from '../utils/url'


const MethaneScreen = () => {

	const state = useSelector(state => state)
	const dispatch = useDispatch()

	const fetchUser = async () => {
		try {

			const user = await Auth.currentAuthenticatedUser();
			const name = user.attributes.name
			const email = user.attributes.email

			return { name, email };
		}catch(error) {
			return { name: 'Anonymous', email: 'N/A' };
		}
	}

	const sendReport = async () => {
		try {

			const concatenateLocationParts = (...parts) => {
				const filteredParts = parts.filter(part => part !== null && part !== undefined)
				return filteredParts.length > 0 ? filteredParts.join(', ') : null;
			}

			const { name, email } = await fetchUser()
			  
			const adaptedState = {
				date: state.methane.date ? state.methane.date : new Date().toString(),
				mayorIncident: state.methane.isMajor,
				location: concatenateLocationParts(
					state.methane.street,
					state.methane.streetNumber,
					state.methane.postalCode,
					state.methane.city,
					state.methane.country
				  ),
				type: state.methane.type,
				hazard: state.methane.hazard,
				access: state.methane.access,
				casualtiesDescription: state.methane.casualtiesDescription,
				adults: state.methane.adults,
				children: state.methane.children,
				fatalities: state.methane.fatalities,
				servicesDescription: state.methane.servicesDescription,
				sanitary: state.methane.sanitary,
				firefighting: state.methane.firefighting,
				rescue: state.methane.rescue,
				user_name: name,
				user_email: email
			}

			const response = await fetch(`${url}/api/incidents`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(adaptedState)
			})

			if (response.ok) {
				alert('State sent successfully')
			}

		}catch(error) {
			console.log(error)
			throw new Error(error)
		}
	}

	const onPress = async () => { 
		try {
			await sendReport()
			dispatch(resetState())
		}catch(error) {
			throw new Error(error)
		}
	}

	return (

			<View style={ componentStyles.methaneContainer }>
				<FlatList
					data={infoMethane}
					ItemSeparatorComponent={SeparatorItem}
					renderItem={({ item: methane }) => (
									<MethaneItem {...methane}/>
								)}
					ListFooterComponent={(
						<View style={componentStyles.buttonContainer}>
							<Pressable
									style={componentStyles.button}
									onPress={(event) => onPress()}
								>
								<StyledText color='colorWhite' fontSize='large' fontWeight='medium'>SEND INCIDENT</StyledText>
							</Pressable>
						</View>
					)}
				/>
			</View>
	)
}


export default MethaneScreen