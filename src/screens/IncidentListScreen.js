import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import useIncidents from '../hooks/useIncidents'
import StyledText from '../components/StyledText'
import SeparatorItem from '../components/SeparatorItem'
import IncidentItem from '../components/IncidentItem'


const IncidentListScreen = () => {

	const insets = useSafeAreaInsets()
	
	const route = useRoute()
	const {email} = route?.params
	const incidents = useIncidents(email)
	const navigation = useNavigation()

	useEffect(() => {
		navigation.setOptions({
			headerLargeTitle: true,
			headerTitle: 'Incidents',
		})
	}, [navigation])


	if (incidents === null || incidents.length === 0) {
		return (
			<View style={{ flex: 1, paddingTop: insets.top, alignItems: 'center', justifyContent: 'center' }}>
				<StyledText>No incidents found</StyledText>
			</View>
		)
	}

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