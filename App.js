import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const endpoint = 'https://www.eventbriteapi.com/v3/'
const token = 'BZW2PTENUJHKKSJDM5WA'
// subcategories/16006
// https://www.eventbriteapi.com/v3/users/me/?token=BZW2PTENUJHKKSJDM5WA
// categories/
// subcategories/16006/
export default function App() {
  axios({
    method: 'get',
    url: `${endpoint}events/subcategories/16006/?token=${token}`,
  }).then((response) => {
    console.log('?????????????', response)
  })
  .catch(error => console.log('error', error))


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
