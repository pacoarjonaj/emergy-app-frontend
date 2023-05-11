import React from 'react'
import { Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledText from './StyledText'
import componentStyles from '../styles/componentStyles'


const MethaneItem = ({title, icon, color, screen}) => {
	
	const navigation = useNavigation()

	return (
		<Pressable
			onPress={() => {navigation.navigate(screen)}}
			style={({pressed}) => [{backgroundColor: pressed ? '#eeeeee' : 'white'}]}
		>
			<View key={icon}>
				<View style={componentStyles.viewMethane}>
					<View style={{backgroundColor: color, ...componentStyles.square}}>
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