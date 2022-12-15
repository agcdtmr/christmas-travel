import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function MyButton({}) {
  const navigation = useNavigation()

  return (
    <View style={styles.button}>
      <Button title="Do extra" color="#b51717" onPress={() => navigation.navigate('Events')} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    padding: 10,
    borderWidth: 3,
    borderColor: '#f5d68f',
    backgroundColor: '#27ae61',
    borderRadius: 50,
    alignSelf: 'center',
  },
  //   buttonText: {
  //     fontSize: 20,
  //     textAlign: 'center',
  //     color: '#white',
  //     fontWeight: 'bold',
  //   },
})

export default MyButton
