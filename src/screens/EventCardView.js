import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function EventCardView(props) {
    return (
    <View style={styles.container}>
        <Text style={styles.text}> This is the EventCard View</Text>
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
  },
    button: {
      color: '#247246'
    }
  });

export default EventCardView;