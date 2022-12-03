import { Button, StyleSheet, Text, View } from 'react-native';


export function HomeView( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homeeeeeee</Text>
      <Button
        title="Go to Events"
        onPress={ () => navigation.navigate('Events')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
  button: {
    color: '#f4d3d0'
  }
});