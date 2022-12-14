import React from 'react'
import { prepareErrorMessage } from '@testing-library/react-native/build/helpers/errors'
import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import MyButton from '../components/MyButton'
import { Appbar, Searchbar } from 'react-native-paper'
import { useState } from 'react'
import Lottie from 'lottie-react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// put {navigation} inside HomeView (...)
export function HomeView({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/background.jpeg')} style={styles.background}>
      <View>
        <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain"></Image>
        <Text style={styles.text}>Christmas is doing a little something extra for someone. You are someone.</Text>
        <MyButton />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flex: 1,
    backgroundColor: '#800B1A',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 50,
    height: 100,
    marginLeft: '7%',
    marginTop: '10%',
  },
  text: {
    color: '#800b1a',
    marginTop: '50%',
    fontSize: 50,
    marginLeft: 25,
    marginRight: 25,
    // padding: 20,
    // marginLeft: '20%',
  },
  // text: {
  //   color: '#F5D68F',
  //   fontWeight: 'bold',
  //   fontSize: 20,
  // },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: '#247246',
    backgroundColor: '#eca824',
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#F5D68F',
    fontWeight: 'bold',
  },
})
