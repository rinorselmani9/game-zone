import React, { useState } from "react"
import { StyleSheet, View, Text, FlatList, Button } from "react-native"
import { globalStyles } from "../styles/global"
import { TouchableOpacity } from "react-native-gesture-handler"
import Card from "../shared/Card"
import { Modal } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [reviews, setReviews] = useState([
    { title: "Zelda", rating: 5, body: "lorem ipsum", key: 1 },
    { title: "Gotta catch them all", rating: 3, body: "lorem ipsum", key: 2 },
    { title: "Not so final", rating: 2, body: "lorem ipsum", key: 3 },
  ])

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={globalStyles.modal}>
          <MaterialIcons name='close' size={24} onPress={() => setModalVisible(false)} style={globalStyles.modalToggle}/>
          <Text>Hello from the Modal</Text>
        </View>
      </Modal>
      <MaterialIcons name='add' size={24} onPress={() => setModalVisible(true)} style={globalStyles.modalToggle}/>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Review Details", { item })}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
export default Home
