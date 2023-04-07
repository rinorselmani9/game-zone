import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStack, HomeScreenStack } from "./Stacks";
import { NavigationContainer } from "@react-navigation/native";


export const RootDrawNavigator = () => {
    const Drawer = createDrawerNavigator()
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreenStack}/>
                <Drawer.Screen name="About" component={AboutStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}