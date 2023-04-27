import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from './src/screens/HomeScreen'
import IncidentsScreen from './src/screens/IncidentsScreen'
import ContactsScreen from './src/screens/ContactsScreen'
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

const globalScreenOptions = {
	headerTitleStyle: {
		fontSize: 32,
		fontWeight: '700',
		color: '#000000'
	},
	headerTitleAlign: 'left',
	headerTransparent: true
}

const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer theme={myTheme}>
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
					...globalScreenOptions
				})}
			>
				<Tab.Screen name="Home" component={HomeScreen}/>
				<Tab.Screen name="Incidents" component={IncidentsScreen} />
				<Tab.Screen name="Contacts" component={ContactsScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>	
		</NavigationContainer>
	)
}

export default App