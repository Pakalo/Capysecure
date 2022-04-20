import React from 'react';
import {StyleSheet, Text, Image, Pressable} from 'react-native';
import {View} from "react-native-web";
import Navbar from './components/Navbar'
import Devices from "./components/Devices";
import Cameras from "./components/Cameras"


export default function App() {
  return (
      <View style={styles.body}>
        <Navbar/>
        <Devices/>
      </View>
  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor : '#080521',
    height : '100%',
    padding : 20,
  },
});