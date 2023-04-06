import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useRoute } from "@react-navigation/native";
import Card from "../shared/Card";

const Details = ({navigation, route:{params:{item}}}) =>{
    
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <Text>{item.rating}</Text>
            </Card>
        </View>
    )
}
export default Details