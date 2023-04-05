import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/home"
import ReviewDetails from "../screens/details"
import { NavigationContainer } from "@react-navigation/native"
import About from "../screens/about"

export const HomeScreenStack = () => {
  const Stack = createStackNavigator()
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Game Zone' component={Home} />
        <Stack.Screen name='Review Details' component={ReviewDetails} />
      </Stack.Navigator>
  )
}
export const AboutStack = () => {
  const Stack = createStackNavigator()
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="About Game Zone" component={About}/>
      </Stack.Navigator>
  )
}
