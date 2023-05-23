import { ActivityIndicator, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useSessionStatus from '../hooks/useSessionStatus'
import componentStyles from '../styles/componentStyles'
import AccountScreen from '../screens/AccountScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'


export default function MyNativeStackAccount() {

	const user = useSessionStatus()

	const NativeStackAccount = createNativeStackNavigator()

	if (user === undefined) {
		return (
			<View style={componentStyles.container}>
				<ActivityIndicator />
			</View>
		)
	}

	return (
		<NativeStackAccount.Navigator screenOptions={{headerShown: false}}>
			{user ? (
				<NativeStackAccount.Screen name="Your Account" component={AccountScreen} />
			) : (
				<>
					<NativeStackAccount.Screen name="Sign In" component={SignInScreen} />
					<NativeStackAccount.Screen name="Sign Up" component={SignUpScreen} />
					<NativeStackAccount.Screen name="Confirm Email" component={ConfirmEmailScreen} />
					<NativeStackAccount.Screen name="Reset your password" component={ForgotPasswordScreen} />
					<NativeStackAccount.Screen name="New password" component={NewPasswordScreen} />
				</>
			)}
		</NativeStackAccount.Navigator>
	)
}