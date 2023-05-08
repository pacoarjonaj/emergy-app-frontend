import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContactNewScreen from '../screens/ContactNewScreen'
import ContactDetailsScreen from '../screens/ContactDetailScreen'
import ContactListScreen from '../screens/ContactListScreen'


export default function MyNativeStackContacts() {
	const NativeStackContacts = createNativeStackNavigator()

	return (
		<NativeStackContacts.Navigator initialRouteName='ConcactListScreen'>
			<NativeStackContacts.Screen name="ContactListScreen" component={ContactListScreen} options={{ headerStyle: {backgroundColor: 'white'}}} />
			<NativeStackContacts.Screen name="ContactDetailsScreen" component={ContactDetailsScreen} options={{headerTransparent: true, headerTitle: ''}}/>
			<NativeStackContacts.Screen name="ContactAddScreen" component={ContactNewScreen} options={{ headerTitle: 'New Contact',headerStyle: {backgroundColor: 'white'} }}/>
		</NativeStackContacts.Navigator>
	)
}