import React, { useEffect } from 'react'
import { FlatList, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledText from '../components/StyledText'
import useManuals from '../hooks/useManuals'


const HomeScreen = () => {
	
	const navigation = useNavigation()
	const manuals = useManuals()

	return (
		<View style={{ flex: 1, alignItems: 'center'}}>

			<FlatList 
					style={{}}
					data={manuals}
					renderItem={({ item: manual }) => (
						<View style={{paddingVertical: 5}}>
							<Pressable
								style={{...styles.pressable, backgroundColor: '#F7F4F4'}}
								onPress={() => {navigation.navigate('Emergency Manual', {id: manual.manual_id})}}
							>
								<View key={manual.manual_id} style={styles.containerList}>
									<StyledText fontSize='large' fontWeight='semibold'>{manual.emergency_manual.manual_title}</StyledText>
								</View>
							</Pressable>
						</View>
					)}
					ListHeaderComponent={(
						<View style={{alignItems: 'center', paddingTop: 20}}>
							<View style={{paddingBottom: 30, width: '60%'}}>
								<TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Report Incident') }}>
									<StyledText color='colorWhite' fontSize='xlarge' fontWeight='semibold'>REPORT INCIDENT</StyledText>
								</TouchableOpacity>
							</View>

							<View style={{ paddingBottom: 10}}>
								<StyledText fontSize='xlarge' fontWeight='semibold' style={{margin: 10}}>Emergency Manuals</StyledText>
							</View>
						</View>
					)}
				/>

		</View>
	)
}


const styles = StyleSheet.create({
	pressable: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 6
	},
	button: {
		alignItems: 'center',
		borderRadius: 8,
		backgroundColor: '#b0463b',
		paddingVertical: 20
	}
})

export default HomeScreen