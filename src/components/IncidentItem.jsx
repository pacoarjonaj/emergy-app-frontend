import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledText from './StyledText'


const incidentItem = ({ incident_id, ...props }) => {

	const navigation = useNavigation()

	return (
		<Pressable>
			<View key={incident_id} style={styles.container}>
				<View>
					<StyledText fontWeight='semibold'>{props.type}</StyledText>
				</View>

				<View style={{paddingVertical: 5}}>
					<StyledText style={{ paddingVertical: 2 }}>{props.location}</StyledText>
				</View>

				<View>
					<StyledText fontSize='small' fontWeight='light'>{props.date}</StyledText>
				</View>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		padding: 18,
		paddingVertical: 5,
	}
})

export default incidentItem