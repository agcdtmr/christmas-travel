import {EventsView} from './src/screens/EventsView';
import {HomeView} from './src/screens/HomeView';
import ProfileView from './src/screens/ProfileView';
import EventCardView from './src/screens/EventCardView';
import AuthView from './src/authentification/AuthView';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from "react-native-vector-icons/Ionicons";
import {View, Text} from "react-native";


const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon:({focused, color, size}) => {
          let iconName;
          if (route.name ==="Home") {
            iconName = focused? "home" : "home-outline";
          }
          else if (route.name === "Events") {
            iconName = focused ? "earth" : "earth-outline";
          }
          else if (route.name === "EventCard") {
            iconName = focused ? "trail-sign" : "trail-sign-outline";
          }
          else if (route.name === "Profile") {
            iconName = focused ? "happy" : "happy-outline";
          }

          return <Ionic name ={iconName} size={size} color={color}/>
                },
        tabBarActiveTintColor: "#8EC278",
        tabBarInactiveTintColor: "#27ae61",
        tabBarStyle:{
          backgroundColor:"#287D4D",
          height:60,
        },
      })
    }
      >

      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Auth" component={AuthView} />
      <Tab.Screen name="Events" component={EventsView} />
      <Tab.Screen name="EventCard" component={EventCardView} />
      <Tab.Screen name="Profile" component={ProfileView} />
   
      </Tab.Navigator>
    </NavigationContainer>
  );
}


// const Stack = createNativeStackNavigator();


      {/* export default function App() {

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
     <Stack.Screen name='Home' component={HomeView}/>
     <Stack.Screen name='Events' component={EventsView}/>
    </Stack.Navigator>
  </NavigationContainer>
  
); */}
