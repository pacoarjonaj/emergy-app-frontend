import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import StyledText from '../components/StyledText'


const HomeScreen = () => {

	const navigation = useNavigation()

	return (
		<View style={{ flex: 1, alignItems: 'center', paddingTop:20}}>
			<TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Report Incident') }}>
				<Ionicons name='ios-add' size={36} color='#ffffff' />
			</TouchableOpacity>
		</View>
	)
}


const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		borderRadius: 8,
		backgroundColor: '#b0463b',
		paddingVertical: 20,
		paddingHorizontal: 80
	}
})

export default HomeScreen