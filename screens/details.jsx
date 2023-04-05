import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useRoute } from "@react-navigation/native";

const Details = ({navigation, route:{params:{item}}}) =>{
    
    return (
        <View style={globalStyles.container}>
            <Text>{item.title}</Text>
        </View>
    )
}
export default Details