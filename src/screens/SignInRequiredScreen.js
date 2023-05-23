import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledText from '../components/StyledText'


const SignInRequiredScreen = () => {

	const navigation = useNavigation()
  	
	return (
		<View style={styles.container}>
			<StyledText fontWeight='semibold' fontSize='large' style={styles.message}>You must sign in to view this screen</StyledText>
			<Button title="Sign In" onPress={() => {navigation.navigate('Account')}} />
		</View>
	)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    textAlign: 'center',
    marginBottom: 20
  },
});

export default SignInRequiredScreen;