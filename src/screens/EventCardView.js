import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import AnimatedLottieView from 'lottie-react-native'

function EventCardView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}> This Christmas</Text>

      <AnimatedLottieView style={{ marginBottom: 200 }} source={require('../lottie_assets/rudolf.json')} autoPlay />

      <AnimatedLottieView style={{ marginTop: 200 }} source={require('../lottie_assets/confetti.json')} autoPlay />

      <Text style={styles.text2}> Be on your way to amazing destinations and sparkling events</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800B1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    color: '#F5D68F',
    fontWeight: 'bold',
    // padding: 25,
    fontSize: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    color: '#247246',
  },

  text1: {
    color: '#F5D68F',
    fontWeight: 'bold',
    padding: 25,
    fontSize: 40,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export default EventCardView
