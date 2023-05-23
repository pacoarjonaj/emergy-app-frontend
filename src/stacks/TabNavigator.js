import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import MyNativeStackAccount from './NativeStackAccount'
import MyNativeStackHome from './NativeStackHome'
import MyNativeStackContacts from './NativeStackContacts'
import MyNativeStackIncidents from './NativeStackIncidents'
import SignInScreen from '../screens/SignInScreen'


const tabScreenOptions = {
	headerTitleStyle: {
		fontSize: 32,
		fontWeight: '700',
		color: '#000000'
	},
	headerTitleAlign: 'left',
	headerTransparent: true
}


export default function MyTabs() {
	
	const Tab = createBottomTabNavigator()

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, size, color }) => {
					let iconName

					if(route.name === 'Home') {
						iconName = focused ? 'ios-home' : 'ios-home-outline'
					}else if(route.name === 'Incidents') {
						iconName = focused ? 'ios-albums' : 'ios-albums-outline'
					}else if(route.name === 'Contacts') {
						iconName = focused ? 'ios-people' : 'ios-people-outline'
					}else if(route.name === 'Account') {
						iconName = focused ? 'ios-person' : 'ios-person-outline'
					}

					return <Ionicons name={iconName} size={size} color={color} />
				},
				...tabScreenOptions
			})}
		>
			<Tab.Screen name="Home" component={MyNativeStackHome} options={{headerShown: false}} />
			<Tab.Screen name="Incidents" component={MyNativeStackIncidents} options={{headerShown: false}} />
			<Tab.Screen name="Contacts" component={MyNativeStackContacts} options={{headerShown: false}} />
			<Tab.Screen name="Account" component={MyNativeStackAccount} options={{headerShown: false}}/>
		</Tab.Navigator>	
	)
}