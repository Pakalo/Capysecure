import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import {Picker, View} from "react-native-web";

export default class Navbar extends React.Component{

    render() {
        return (
            <View style={styles.nav_bar}>
                <Picker style={styles.picker}>
                    <Picker.Item label="Salle de NSI"/>
                    <Picker.Item label="Machine à café"/>
                    <Picker.Item label="Cantine"/>
                </Picker>
                <View style={styles.picto_container}>
                    <Pressable>
                        <Image style={styles.picto} source={{uri: 'https://media.discordapp.net/attachments/966381193530576939/966381293443088444/unknown.png'}}/>
                    </Pressable>
                    <Pressable>
                        <Image style={styles.picto} source={{uri: 'https://media.discordapp.net/attachments/966381193530576939/966381293245964308/unknown.png'}}/>
                    </Pressable>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    picto: {
        width: 58,
        height: 58,
        marginLeft : 30,
    },
    picker : {
        width: 150,
        height: 30,
        backgroundColor : '#282454',
        color : '#FFF',
        borderRadius : 10,
        borderWidth : 0,

    },
    nav_bar:{
        flex: 1,
        flexDirection : "row",
    },
    picto_container: {
        flex: 1,
        flexDirection : "row-reverse",
    }
});
