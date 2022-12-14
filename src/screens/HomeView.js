import React from 'react'
import { prepareErrorMessage } from '@testing-library/react-native/build/helpers/errors'
import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import MyButton from '../components/MyButton'
import { Appbar, Searchbar } from 'react-native-paper'
import { useState } from 'react'
import Lottie from 'lottie-react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Snowflakes from 'react-native-snowflakes'

// put {navigation} inside HomeView (...)
export function HomeView({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <View>
        <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain"></Image>
        <Text style={styles.text}>
          {'Christmas is doing a little something extra for someone. You are someone special.'}
        </Text>
        <MyButton />
      </View>
      <Snowflakes />
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
    height: '105%',
  },
  logo: {
    width: 50,
    height: 100,
    marginLeft: '82%',
    marginTop: '7%',
  },
  text: {
    color: '#F5D68F',
    marginTop: '40%',
    fontSize: 45,
    paddingHorizontal: 25,
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
