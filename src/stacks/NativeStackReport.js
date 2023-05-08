import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MethaneScreen from '../screens/MethaneScreen'
import MethaneAccessScreen from '../screens/MethaneAccessScreen'
import MethaneEmergyScreen from '../screens/MethaneEmergyScreen'
import MethaneHazardScreen from '../screens/MethaneHazardScreen'
import MethaneLocationScreen from '../screens/MethaneLocationScreen'
import MethaneMajorScreen from '../screens/MethaneMajorScreen'
import MethaneSeverityScreen from '../screens/MethaneSeverityScreen'
import MethaneTypeScreen from '../screens/MethaneTypeScreen'


export default function MyNativeStackReport() {
	const NativeStackReport = createNativeStackNavigator()

	return (
		<NativeStackReport.Navigator initialRouteName="Report New Incident" independent={true} >
			<NativeStackReport.Screen name="Report New Incident" component={MethaneScreen}/>
			<NativeStackReport.Screen name="Major Incident" component={MethaneMajorScreen}/>
			<NativeStackReport.Screen name="Exact Location" component={MethaneLocationScreen}/>
			<NativeStackReport.Screen name="Type of Incident" component={MethaneTypeScreen}/>
			<NativeStackReport.Screen name="Hazards" component={MethaneHazardScreen}/>
			<NativeStackReport.Screen name="Access to Scene" component={MethaneAccessScreen}/>
			<NativeStackReport.Screen name="Number and Severity" component={MethaneSeverityScreen}/>
			<NativeStackReport.Screen name="Emergency Services" component={MethaneEmergyScreen}/>
		</NativeStackReport.Navigator>
	)
}