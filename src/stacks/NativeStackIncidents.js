import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IncidentListScreen from '../screens/IncidentListScreen'


export default function MyNativeStackIncidents() {
	const NativeStackIncidents = createNativeStackNavigator()

	return (
		<NativeStackIncidents.Navigator initialRouteName='IncidentListScreen'>
			<NativeStackIncidents.Screen name="IncidentListScreen" component={IncidentListScreen} options={{ headerStyle: {backgroundColor: 'white'}}} />
		</NativeStackIncidents.Navigator>
	)
}