import { NavigationContainer } from '@react-navigation/native'
import theme from '../styles/theme'
import MyTabs from './TabNavigator'


export default function Navigation() {
	return (
		<NavigationContainer theme={theme.navigationTheme}>
			<MyTabs />
		</NavigationContainer>
	)
}