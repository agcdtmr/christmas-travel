import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CountDown from 'react-native-countdown-component'
import Snowflakes from 'react-native-snowflakes'
import { Text as Txt } from 'react-native-paper'
import AnimatedLottieView from 'lottie-react-native'


const LottieAnimation = () => {}

function CountDownView(props) {
  const xmasDate = new Date('2022-12-25T18:22:20.643Z').getTime()
  const now = Date.now()
  console.log(xmasDate - now)

  return (
    <View style={styles.container}>


      <AnimatedLottieView
      style={{marginBottom:200}}
      source={require("../lottie_assets/christmas_bell.json")}
      autoPlay
      />

      <Txt variant="displayLarge" style={styles.text}>
              Christmas Countdown
            </Txt>

            <AnimatedLottieView
      style={{marginTop:200}}
      source={require("../lottie_assets/christmas_tree.json")}
      autoPlay
      />


      <CountDown
        size={30}
        until={(xmasDate - now) / 1000}
        onFinish={() => alert('Merry Christmas!')}
        digitStyle={{ backgroundColor: '#800b1a', borderWidth: 2, borderColor: '#f5d68f' }}
        digitTxtStyle={{ color: '#f5d68f' }}
        timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
        separatorStyle={{ color: '#f5d68f' }}
        timeToShow={['D', 'H', 'M', 'S']}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />

      <Snowflakes />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800B1A',
    alignItems: 'center',

    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  text: {
    color: '#f5d68f',
    fontWeight: 'bold',
    fontSize: 30,
  }
})

export default CountDownView
