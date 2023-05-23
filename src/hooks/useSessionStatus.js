import { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';


const useSessionStatus = () => {

	const [user, setUser] = useState(undefined);

	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
			setUser(authUser)

		} catch (error) {
			setUser(null)
		}
	};

	useEffect(() => {
		checkUser()
	}, [])

	useEffect(() => {
		const listener = (data) => {
			if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
				checkUser()
			}
		};

		const hubListenerCancelToken = Hub.listen('auth', listener)
		return () => hubListenerCancelToken();
	}, [])

	return user
}

export default useSessionStatus;
