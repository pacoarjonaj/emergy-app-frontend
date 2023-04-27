import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StyledText from './StyledText'


const ContactItem = ({ contact_id, name }) => {
  return (
	<View key={contact_id} style={styles.container}>
		<View style={{paddingVertical: 5}}>
			<StyledText fontWeight='semibold' style={{ paddingVertical: 2 }}>{name}</StyledText>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingVertical: 5
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4
	}
})

export default ContactItem