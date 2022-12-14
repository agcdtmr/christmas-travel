import { prepareErrorMessage } from '@testing-library/react-native/build/helpers/errors'
import { Button, StyleSheet, Text, View } from 'react-native'
import MyButton from '../components/MyButton'
import { Appbar, Searchbar } from 'react-native-paper'
import { useState } from 'react'

// put {navigation} inside HomeView (...)
export function HomeView() {
  const [search, setSearch] = useState('')

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Christmas App" />
      </Appbar>
      <MyButton />
      {/* onPress={ () => navigation.navigate('Events')} */}
    </View>
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
  text: {
    color: '#F5D68F',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: '#247246',
    backgroundColor: '#287D4D',
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#27AE61',
    fontWeight: 'bold',
  },
})
