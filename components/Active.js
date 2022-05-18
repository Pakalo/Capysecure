import React from 'react';
import {StyleSheet, Text, Image, Pressable} from 'react-native';
import {Dimensions, View} from "react-native-web";


export default class Devices extends React.Component{

    render() {
        return (
            <View style={styles.main}>
                <Pressable style={styles.pressable}>
                    <Text style={styles.text}>Historique</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                    <Text style={styles.text}>Actif</Text>
                    <Image style={styles.picto} source={{uri: 'https://media.discordapp.net/attachments/966381193530576939/976402299058524180/unknown.png'}}/>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main : {
        marginTop : 70,
        maxHeight : "80%",
        justifyContent: "center",
        alignItems: "center",
    },
    pressable : {
        marginTop: 50,
        alignItems: "center",
        backgroundColor : '#282454',
        width : 407,
        maxHeight : 150,
        borderRadius : 30,
        justifyContent : 'center',
        flex : 1,
        flexDirection : "row",
    },
    text : {
        color : '#FFF',
        fontSize : 50,
        textAlign : 'center',
    },
    picto : {
        marginLeft : 15,
        width : 50,
        height: 50,

    },
});
