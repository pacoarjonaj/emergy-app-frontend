import { NavigationContainer } from '@react-navigation/native'
import MyTabs from './TabNavigator'
import componentStyles from '../styles/componentStyles'


export default function Navigation() {
	return (
		<NavigationContainer theme={componentStyles.navigationTheme}>
			<MyTabs />
		</NavigationContainer>
	)
}