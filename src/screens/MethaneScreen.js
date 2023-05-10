import React, { useEffect } from 'react'
import theme from '../styles/theme'
import infoMethane from '../data/infoMethane'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { resetState } from '../redux/methaneSlice'
import MethaneItem from '../components/MethaneItem'
import SeparatorItem from '../components/SeparatorItem'
import StyledText from '../components/StyledText'
import { useNavigation } from '@react-navigation/native'


const MethaneScreen = () => {

	const navigation = useNavigation()
	const dispatch = useDispatch()

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Pressable onPress={() => { navigation.navigate('Landing') }}>
					<Ionicons name='chevron-back' size={30} color='#b0463b' style={{}} />
				</Pressable>
			)
		})
	}, [navigation])


	return (

			<View style={styles.container}>
				<FlatList
					data={infoMethane}
					ItemSeparatorComponent={SeparatorItem}
					renderItem={({ item: methane }) => (
									<MethaneItem {...methane}/>
								)}
					ListFooterComponent={(
						<View style={styles.buttonContainer}>
							<Pressable
									style={styles.button}
									onPress={(event) => {
										dispatch(resetState())
										alert('Report sent!')
									}}
								>
								<StyledText color='colorWhite' fontSize='large' fontWeight='medium'>SEND INCIDENT</StyledText>
							</Pressable>
						</View>
					)}
				/>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		flexDirection: 'column', 
		alignContent: 'center'
	},
	buttonContainer: {
		bottom: 0,
		width: '100%',
		alignItems: 'center',
		paddingVertical: 15
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


export default MethaneScreen