import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Testing = () => {
    return(
        <View style={styles.container}>
          <Text style={styles.red}>Just red</Text>
          <Text style={styles.bigBlue}>big blue</Text>
          <Text style={[styles.red, styles.bigBlue]}>Red and blue</Text>
          <Text style={[styles.bigBlue, styles.red]}>Blue and Red</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 50
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30  
    },
    red: {
      color:'red'
    }
  });
export default Testing;