import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const HomeScreen = () => {

	const insets = useSafeAreaInsets()

	return (
		<View style={{ flex: 1, paddingTop: insets.top + 45, paddingLeft: 18 }}>
			<Text>HomeScreen</Text>
		</View>
	)
}

export default HomeScreen