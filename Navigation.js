import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from './src/screens/HomeScreen'
import IncidentsScreen from './src/screens/IncidentsScreen'
import ContactDetailsScreen from './src/screens/ContactDetailScreen'
import ContactListScreen from './src/screens/ContactListScreen'
import NewContactScreen from './src/screens/NewContactScreen'
import SettingsScreen from './src/screens/SettingsScreen'


const myTheme = {
	dark: false,
	colors: {
		primary: '#b0463b',
		background: '#ffffff',
		card: '#f3f6f4',
		text: '#24292e',
		border: '#24292e',
		notification: '#f3f6f4'
	}
}

const tabScreenOptions = {
	headerTitleStyle: {
		fontSize: 32,
		fontWeight: '700',
		color: '#000000'
	},
	headerTitleAlign: 'left',
	headerTransparent: true
}


const Stack = createNativeStackNavigator()

function MyStack() {
	return (
		<Stack.Navigator initialRouteName='ConcactListScreen'>
			<Stack.Screen name="ContactListScreen" component={ContactListScreen} />
			<Stack.Screen name="ContactDetailsScreen" component={ContactDetailsScreen} />
			<Stack.Screen name="NewContactScreen" component={NewContactScreen} />
		</Stack.Navigator>
	)
}

const Tab = createBottomTabNavigator()

function MyTabs() {
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
					}else if(route.name === 'Settings') {
						iconName = focused ? 'ios-settings' : 'ios-settings-outline'
					}

					return <Ionicons name={iconName} size={size} color={color} />
				},
				...tabScreenOptions
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen}/>
			<Tab.Screen name="Incidents" component={IncidentsScreen} />
			<Tab.Screen name="Contacts" component={MyStack} options={{headerShown: false}}/>
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>	
	)
}

export default function Navigation() {
	return (
		<NavigationContainer theme={myTheme}>
			<MyTabs />
		</NavigationContainer>
	)
}