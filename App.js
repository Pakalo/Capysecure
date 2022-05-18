import {StyleSheet} from 'react-native';
import {Dimensions, View} from "react-native-web";
import Navbar from './components/Navbar'
import Devices from "./components/Devices";
import Active from "./components/Active"


export default function App() {
  return (
      <View style={styles.body}>
          <Navbar style={styles.navbar}/>
          <View style={styles.page}>
              <Devices/>
              <Active/>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    body:{
        minWidth : '100%',
        minHeight : "100%",
        backgroundColor : '#080521',
        padding : 20,
    },
    page : {
        flex : "auto",
        flexDirection : "row",

    },
});