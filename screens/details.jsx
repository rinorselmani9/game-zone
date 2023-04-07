import React from "react"
import { View, Text, Image } from "react-native"
import { globalStyles, images } from "../styles/global"
import Card from "../shared/Card"

const Details = ({
  route: {
    params: { item },
  },
}) => {
  const rating = item.rating
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={globalStyles.rating}>
          <Text>Game Zone rating:</Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  )
}
export default Details
