import React from 'react';
import {StyleSheet, Text, Image, Pressable} from 'react-native';
import {Picker, ScrollView, View} from "react-native-web";


export default class Devices extends React.Component{

    render() {
        return (
            <View style={styles.main}>
                <ScrollView style={styles.scroll_view}>
                    <View style={styles.card}>
                        <Text style={styles.text}>Capteur sonore</Text>
                        <View style={styles.inner_card}>
                            <Text style={styles.text}>Status</Text>
                            <Image style={styles.picto} source={{uri: 'https://media.discordapp.net/attachments/966381193530576939/966407765448851466/unknown.png'}}/>
                        </View>
                        <Text style={styles.text}>Dernier : Il y a 4 minutes</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.text}>Capteur sonore</Text>
                        <View style={styles.inner_card}>
                            <Text style={styles.text}>Status</Text>
                            <Image style={styles.picto} source={{uri: 'https://media.discordapp.net/attachments/966381193530576939/966407765448851466/unknown.png'}}/>
                        </View>
                        <Text style={styles.text}>Dernier : Il y a 4 minutes</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.text}>Capteur sonore</Text>
                        <View style={styles.inner_card}>
                            <Text style={styles.text}>Status</Text>
                            <Image style={styles.picto} source={{uri: 'https://media.discordapp.net/attachments/966381193530576939/966407765448851466/unknown.png'}}/>
                        </View>
                        <Text style={styles.text}>Dernier : Il y a 4 minutes</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.text}>Capteur sonore</Text>
                        <View style={styles.inner_card}>
                            <Text style={styles.text}>Status</Text>
                            <Image style={styles.picto} source={{uri: 'https://media.discordapp.net/attachments/966381193530576939/966407765448851466/unknown.png'}}/>
                        </View>
                        <Text style={styles.text}>Dernier : Il y a 4 minutes</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inner_card : {
        flex: 1,
        flexDirection : "row",
        marginTop : 15,
    },
    scroll_view : {
        height : 700,
        width : 450,
    },
    main : {
        marginBottom : 100,
    },
    card : {
        marginTop : 35,
        backgroundColor : '#282454',
        padding: 20,
        width : 400,
        height : 160,
        borderRadius : 40,
    },
    text : {
        color : '#FFF',
        fontSize : 28,
        fontFamily : 'Arial',
    },
    picto : {
        marginLeft : 15,
        width : 23,
        height: 23,
    },
});
