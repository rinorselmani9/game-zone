import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/home"
import ReviewDetails from "../screens/details"
import { NavigationContainer } from "@react-navigation/native"

export const HomeScreenStack = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home Screen' component={Home} />
        <Stack.Screen name='Review Details' component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

