import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Details(){
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        padding:30
    }
})