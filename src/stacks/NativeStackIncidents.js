import { ActivityIndicator, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useSessionStatus from '../hooks/useSessionStatus'
import componentStyles from '../styles/componentStyles'
import IncidentListScreen from '../screens/IncidentListScreen'
import SignInRequiredScreen from '../screens/SignInRequiredScreen'


export default function MyNativeStackIncidents() {

	const user = useSessionStatus()
	
	const NativeStackIncidents = createNativeStackNavigator()

	if (user === undefined) {
		return (
			<View style={componentStyles.container}>
				<ActivityIndicator />
			</View>
		)
	}

	return (
		<NativeStackIncidents.Navigator >
			{user ? (
				<NativeStackIncidents.Screen 
					name="IncidentListScreen" 
					component={IncidentListScreen} 
					initialParams={{ email: user.attributes.email }}
					options={{ headerStyle: {backgroundColor: 'white'}}} />
			) : (
				<NativeStackIncidents.Screen name="SignInRequiredScreen" component={SignInRequiredScreen} options={{headerShown: false}} />
			)}
	
		</NativeStackIncidents.Navigator>
	)
}