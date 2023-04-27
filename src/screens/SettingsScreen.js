import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SettingsScreen = () => {

	const insets = useSafeAreaInsets()

	return (
		<View style={{ flex: 1, paddingTop: insets.top + 45, paddingLeft: 18 }}>
			<Text>SettingsScreen</Text>
		</View>
	)
}

export default SettingsScreen