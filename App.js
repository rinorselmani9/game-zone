import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading'

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/static/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/static/Nunito-Bold.ttf'),
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

    return (
      <Home />
    )
    
}
