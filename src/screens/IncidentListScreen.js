import React, { useEffect } from 'react'
import { FlatList, View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import SeparatorItem from '../components/SeparatorItem'
import useIncidents from '../hooks/useIncidents'
import IncidentItem from '../components/IncidentItem'


const IncidentListScreen = () => {

	const insets = useSafeAreaInsets()
	const incidents = useIncidents()
	const navigation = useNavigation()

	useEffect(() => {
		navigation.setOptions({
			headerLargeTitle: true,
			headerTitle: 'Incidents',
		})
	}, [navigation])


	return (
		<View style={{ flex: 1, paddingTop: insets.top }}>
			<FlatList
				data={incidents}
				ItemSeparatorComponent={SeparatorItem}
				renderItem={({ item: incident }) => (
								<IncidentItem {...incident} />
							)}
				contentInsetAdjustmentBehavior='automatic'
			/>
		</View>
	)
}

export default IncidentListScreen