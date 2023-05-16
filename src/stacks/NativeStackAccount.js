import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/AccountScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'



export default function MyNativeStackAccount() {
	const NativeStackAccount = createNativeStackNavigator()

	return (
		<NativeStackAccount.Navigator initialRouteName='AccountScreen'>
			<NativeStackAccount.Screen name="Your Account" component={AccountScreen} options={{ headerStyle: {backgroundColor: 'white'}}} />
			<NativeStackAccount.Screen name="Confirm Email" component={ConfirmEmailScreen} />
			<NativeStackAccount.Screen name="Reset your password" component={ForgotPasswordScreen} />
			<NativeStackAccount.Screen name="New password" component={NewPasswordScreen} />
			<NativeStackAccount.Screen name="Sign In" component={SignInScreen} />
			<NativeStackAccount.Screen name="Sign Up" component={SignUpScreen} />
		</NativeStackAccount.Navigator>
	)
}