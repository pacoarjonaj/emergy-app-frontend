import React, { useEffect } from 'react'
import theme from '../styles/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlatList, Pressable, Text, View } from 'react-native'
import MethaneItem from '../components/MethaneItem'
import { useNavigation } from '@react-navigation/native'


const info = [
	{ title: "Major Incident", icon: "M", color: theme.colors.red, screen: "Major Incident" },
	{ title: "Exact Location", icon: "E", color: theme.colors.green, screen: "Exact Location" },
	{ title: "Type of incident", icon: "T", color: theme.colors.violet, screen: "Type of Incident" },
	{ title: "Hazards", icon: "H", color: theme.colors.blue, screen: "Hazards" },
	{ title: "Access to Scene", icon: "A", color: theme.colors.orange, screen: "Access to Scene"},
	{ title: "Number and Severity", icon: "N", color: theme.colors.gray, screen: "Number and Severity" },
	{ title: "Emergy Services", icon: "E", color: theme.colors.red, screen: "Emergency Services" }
]

const ItemSeparator = () => {
	return ( 
		<View 
			style={{
				height: 0.5,
				width: '90%',
				alignSelf: 'center',
				backgroundColor: '#bcbcbc'
			}} 
		/>
	)
}

const ReportIncidentScreen = () => {

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
				data={info}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={({ item: methane }) => (
								<MethaneItem {...methane}/>
							)}
			/>
		</View>
	)
}


export default ReportIncidentScreen