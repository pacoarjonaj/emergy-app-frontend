import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const IncidentListScreen = () => {

	const insets = useSafeAreaInsets()

	return (
		<View style={{ flex: 1, paddingTop: insets.top + 45, paddingLeft: 18 }}>
			<Text>IncidentsScreen</Text>
		</View>
	)
}

export default IncidentListScreen