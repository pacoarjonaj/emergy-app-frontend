import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ReportIncidentScreen from '../screens/ReportIncidentScreen'
import AccessScreen from '../screens/AccessScreen'
import EmergencyServScreen from '../screens/EmergencyServScreen'
import HazardsScreen from '../screens/HazardsScreen'
import LocationScreen from '../screens/LocationScreen'
import MajorIncidentScreen from '../screens/MajorIncidentScreen'
import SeverityScreen from '../screens/SeverityScreen'
import TypeScreen from '../screens/TypeScreen'


export default function MyNativeStackReport() {
	const NativeStackReport = createNativeStackNavigator()

	return (
		<NativeStackReport.Navigator initialRouteName="Report New Incident" independent={true} >
			<NativeStackReport.Screen name="Report New Incident" component={ReportIncidentScreen}/>
			<NativeStackReport.Screen name="Major Incident" component={MajorIncidentScreen}/>
			<NativeStackReport.Screen name="Exact Location" component={LocationScreen}/>
			<NativeStackReport.Screen name="Type of Incident" component={TypeScreen}/>
			<NativeStackReport.Screen name="Hazards" component={HazardsScreen}/>
			<NativeStackReport.Screen name="Access to Scene" component={AccessScreen}/>
			<NativeStackReport.Screen name="Number and Severity" component={SeverityScreen}/>
			<NativeStackReport.Screen name="Emergency Services" component={EmergencyServScreen}/>
		</NativeStackReport.Navigator>
	)
}