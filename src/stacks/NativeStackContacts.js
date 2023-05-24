import { ActivityIndicator, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useSessionStatus from '../hooks/useSessionStatus'
import componentStyles from '../styles/componentStyles'
import ContactNewScreen from '../screens/ContactNewScreen'
import ContactDetailsScreen from '../screens/ContactDetailScreen'
import ContactListScreen from '../screens/ContactListScreen'
import SignInRequiredScreen from '../screens/SignInRequiredScreen'


export default function MyNativeStackContacts() {

	const user = useSessionStatus()
	
	const NativeStackContacts = createNativeStackNavigator()

	if (user === undefined) {
		return (
			<View style={componentStyles.container}>
				<ActivityIndicator />
			</View>
		)
	}

	return (
		<NativeStackContacts.Navigator>
			{user ? (
				<>
					<NativeStackContacts.Screen 
						name="ContactListScreen" 
						component={ContactListScreen} 
						initialParams={{ email: user.attributes.email }}
						options={{ headerStyle: {backgroundColor: 'white'}}} />
					<NativeStackContacts.Screen name="ContactDetailsScreen" component={ContactDetailsScreen} options={{headerTransparent: true, headerTitle: ''}}/>
					<NativeStackContacts.Screen name="ContactAddScreen" component={ContactNewScreen} options={{ headerTitle: '',headerStyle: {backgroundColor: 'white'} }}/>
				</>
			) : (
				<NativeStackContacts.Screen name="SignInRequiredScreen" component={SignInRequiredScreen} options={{headerShown: false}} />
			)}
		
		</NativeStackContacts.Navigator>
	)
}