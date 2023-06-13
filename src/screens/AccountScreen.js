import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Auth } from 'aws-amplify'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'

const AccountScreen = () => {

	const [user, setUser] = useState(null)

	useEffect(() => {
		// Usamos este metodo porque ya está la sesion iniciada
		const fetchUserName = async () => {
			try {
				const user = await Auth.currentUserInfo();
				setUser(user.attributes)
			}catch(error) {
				return 'Anonymous'
			}
		}

		fetchUserName()
	}, [])

	const signOut = () => {
		Auth.signOut()
	}

	return (
		<View style={styles.container}>

			{user ? (
				<>
					<StyledText fontSize="xlarge" fontWeight="semibold" style={styles.title}>Your account:</StyledText>

					<StyledText fontSize='large' fontWeight='bold' style={styles.label}>Name:</StyledText>
					<StyledText style={styles.text}>{user.name}</StyledText>
	
					<StyledText fontSize='large' fontWeight='bold' style={styles.label}>Email:</StyledText>
					<StyledText style={styles.text}>{user.email}</StyledText>
	
					<StyledText fontSize='large' fontWeight='bold' style={styles.label}>Phone Number:</StyledText>
					<StyledText style={styles.text}>{user.phone_number}</StyledText>

					<Text onPress={signOut} style={{ color:'red', fontSize: 20 }}>Sign Out</Text>
				</>
			) : (
				<View style={componentStyles.loadingContainer}>
					<ActivityIndicator/>
				</View>	
			)}

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  padding: 20,
	},
	title: {
	  marginVertical: 10,
	},
	label: {
	  marginBottom: 5,
	},
	text: {
	  marginBottom: 15,
	},
	signOutText: {
	  color: 'red',
	  fontSize: 20,
	  marginTop: 20,
	}
  });

export default AccountScreen