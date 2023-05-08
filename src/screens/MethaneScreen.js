import React, { useEffect } from 'react'
import theme from '../styles/theme'
import infoMethane from '../data/infoMethane'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlatList, Pressable, Text, View } from 'react-native'
import MethaneItem from '../components/MethaneItem'
import SeparatorItem from '../components/SeparatorItem'
import { useNavigation } from '@react-navigation/native'




const MethaneScreen = () => {

	const navigation = useNavigation()

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
		<View style={{ flex: 1}}>
			<FlatList
				data={infoMethane}
				ItemSeparatorComponent={SeparatorItem}
				renderItem={({ item: methane }) => (
								<MethaneItem {...methane}/>
							)}
			/>
		</View>
	)
}


export default MethaneScreen