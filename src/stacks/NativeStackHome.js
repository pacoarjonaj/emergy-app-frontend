import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import MethaneScreen from '../screens/MethaneScreen'
import MethaneAccessScreen from '../screens/MethaneAccessScreen'
import MethaneEmergyScreen from '../screens/MethaneEmergyScreen'
import MethaneHazardScreen from '../screens/MethaneHazardScreen'
import MethaneLocationScreen from '../screens/MethaneLocationScreen'
import MethaneMajorScreen from '../screens/MethaneMajorScreen'
import MethaneSeverityScreen from '../screens/MethaneSeverityScreen'
import MethaneTypeScreen from '../screens/MethaneTypeScreen'


export default function MyNativeStackHome() {
	const NativeStackHome = createNativeStackNavigator()

	return (
		<NativeStackHome.Navigator initialRouteName='Landing'>
		  <NativeStackHome.Screen name="Landing" component={HomeScreen} options={{headerTitle: 'Home'}}/>
		  <NativeStackHome.Screen name="Report Incident" component={MethaneScreen}/>
			<NativeStackHome.Screen name="Major Incident" component={MethaneMajorScreen}/>
			<NativeStackHome.Screen name="Exact Location" component={MethaneLocationScreen}/>
			<NativeStackHome.Screen name="Type of Incident" component={MethaneTypeScreen}/>
			<NativeStackHome.Screen name="Hazards" component={MethaneHazardScreen}/>
			<NativeStackHome.Screen name="Access to Scene" component={MethaneAccessScreen}/>
			<NativeStackHome.Screen name="Number and Severity" component={MethaneSeverityScreen}/>
			<NativeStackHome.Screen name="Emergency Services" component={MethaneEmergyScreen}/>
		</NativeStackHome.Navigator>
	  )
}