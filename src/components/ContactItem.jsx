import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledText from './StyledText'



const ContactItem = ({ contact_id, name }) => {

	const navigation = useNavigation()

	return (
		<Pressable 
			onPress={() => {navigation.navigate('ContactDetailsScreen', {id: contact_id})}}
			onLongPress={() => {console.log("onLongPress " + name)}}
			style={({pressed}) => [{backgroundColor: pressed ? '#eeeeee' : 'white'}]}
		>
			<View key={contact_id} style={styles.container}>
				<View style={{paddingVertical: 5}}>
					<StyledText fontWeight='semibold' style={{ paddingVertical: 2 }}>{name}</StyledText>
				</View>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 18,
		paddingVertical: 5,
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4
	}
})

export default ContactItem