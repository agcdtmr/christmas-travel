import {EventsView} from './src/screens/EventsView'
import {HomeView} from './src/screens/HomeView'
import {NavigationContainer, TabActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name='Home' component={HomeView}/>
       <Stack.Screen name='Events' component={EventsView}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
