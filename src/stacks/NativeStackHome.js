import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyNativeStackReport from './NativeStackReport'
import HomeScreen from '../screens/HomeScreen'


export default function MyNativeStackHome() {
	const NativeStackHome = createNativeStackNavigator()

	return (
		<NativeStackHome.Navigator initialRouteName='Landing'>
		  <NativeStackHome.Screen name="Landing" component={HomeScreen} options={{headerTitle: 'Home'}}/>
		  <NativeStackHome.Screen name="Report Incident" component={MyNativeStackReport} options={{headerShown: false}}/>
		</NativeStackHome.Navigator>
	  )
}