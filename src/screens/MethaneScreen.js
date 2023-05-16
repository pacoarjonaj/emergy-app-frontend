import React, { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlatList, Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { changeDeclaration, resetState } from '../redux/methaneSlice'
import componentStyles from '../styles/componentStyles'
import infoMethane from '../data/infoMethane'
import MethaneItem from '../components/MethaneItem'
import SeparatorItem from '../components/SeparatorItem'
import StyledText from '../components/StyledText'


const MethaneScreen = () => {

	const navigation = useNavigation()
	const state = useSelector(state => state)
	const dispatch = useDispatch()

	const onPress = () => { 
		// En el POST hay que comprobar que si date === null es new Date()
		console.log('STATE ENVIADO: ')
		console.log(state)

		alert('Report sent!')
		dispatch(resetState())
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