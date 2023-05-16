import React from 'react'
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import Navigation from './src/stacks/Navigation'


Amplify.configure(config);

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	)
}
  

export default App

 
/*
const signUpConfig = {
	header: 'My Customized Sign Up',
	hideAllDefaults: true,
	signUpFields: [
	  {
		label: 'Full Name',
		key: 'name',
		required: true,
		displayOrder: 1,
		type: 'String',
	  },
	  {
		label: 'Email',
		key: 'username',
		required: true,
		displayOrder: 2,
		type: 'email', // Utiliza el tipo "email" para indicar que se espera un correo electrónico
	  },
	  {
		label: 'Phone',
		key: 'phone_number',
		required: true,
		displayOrder: 3,
		type: 'phone_number',
	  },
	  {
		label: 'Password',
		key: 'password',
		required: true,
		displayOrder: 4,
		type: 'password',
	  },
	],
  };
*/ 