import React from 'react'
import theme from '../styles/theme'
import { Pressable, View, StyleSheet, Text } from 'react-native'
import StyledText from './StyledText'
import { useNavigation } from '@react-navigation/native'


const MethaneItem = ({title, icon, color, screen}) => {
	
	const navigation = useNavigation()

	return (
		<Pressable
			onPress={() => {navigation.navigate(screen)}}
			style={({pressed}) => [{backgroundColor: pressed ? '#eeeeee' : 'white'}]}
		>
			<View key={icon}>
				<View style={theme.viewMethane}>
					<View style={{backgroundColor: color, ...theme.square}}>
						<StyledText fontSize='xlarge' fontWeight='medium' color='colorWhite'>{icon}</StyledText>
					</View>
				
					<View style={{ paddingLeft: 12 }}>
						<StyledText fontSize='xlarge' fontWeight='medium'>{title}</StyledText>
					</View>
				</View>
			</View>
		</Pressable>
	)
}

export default MethaneItem