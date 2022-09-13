import React from "react";
import { View, Text, StyleSheet, Systrace, Button } from "react-native";

const Flex = () => {
    return(
        <View style={[styles.container, {
            flexDirection: 'column',
            alignContent:'flex-start',
            alignItems:'flex-start',
        }]}>
            <View style={[styles.box,{backgroundColor:'red'}]}/>
            <View style={[styles.box, {backgroundColor:'blue'}]} />
            <View style={[styles.box, {backgroundColor:'green'}]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:20
    },
    box: {
        width:100,
        height: 100
    }
})
export default Flex;