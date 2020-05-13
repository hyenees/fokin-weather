import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#F8EFBA",
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:20,
        paddingVertical:100,
    },
    text: {
        fontSize:30,
    }
});