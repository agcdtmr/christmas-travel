import React from 'react';
import {View, Text} from "react-native";
import { StyleSheet} from 'react-native';

function ProfileView(props) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}> This is the Profile Page</Text>
    </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#800B1A',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text:{
        color:"#F5D68F",
        fontWeight: "bold",
        fontSize:20
    }
})

export default ProfileView;