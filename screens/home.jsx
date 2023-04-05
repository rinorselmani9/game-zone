import React, { useState } from "react"
import { StyleSheet, View, Text,FlatList, Button } from "react-native"
import { globalStyles } from "../styles/global"
import { TouchableOpacity } from "react-native-gesture-handler"

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: "Zelda", rating: 5, body: "lorem ipsum", key: 1 },
    { title: "Gotta catch them all", rating: 3, body: "lorem ipsum", key: 2 },
    { title: "Not so final", rating: 2, body: "lorem ipsum", key: 3 },
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Review Details", {item})}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
export default Home
