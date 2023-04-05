import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

const  Home = ({navigation}) =>{

    // const {navigate} = props.navigation
    // const navigation = useNavigation()

    const pressHandler = () => {
        navigation.navigate('Review Details')
    }

    return (
        <View style={globalStyles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to review details" onPress={pressHandler}></Button>
        </View>
    )
}
export default Home