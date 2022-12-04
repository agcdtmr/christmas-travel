import React from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, TouchableHighlight} from "react-native";

function MyButton({}) {
    return ( 
        <TouchableHighlight style={styles.button} underlayColor="#2C99FF"
        onPress={() => alert("Functionality to come soon")}>
        <View>
        <Text style={styles.buttonText}>Go to Events</Text>
        </View>
        </TouchableHighlight>

    );
}

const styles = StyleSheet.create({
    button:{
        margin:10,
        padding:10,
        borderWidth:3,
        borderColor: "#247246", 
        backgroundColor:'#287D4D',
        borderRadius:20,
        alignSelf:'center',
        
    },
    buttonText:{
        fontSize:20,
        textAlign:"center",
        color: "#27AE61",
        fontWeight:"bold"
    },
});

export default MyButton;