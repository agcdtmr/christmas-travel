import {EventsView} from './src/screens/EventsView';
import {HomeView} from './src/screens/HomeView';
import ProfileView from './src/screens/ProfileView';
import EventCardView from './src/screens/EventCardView';
import { Provider } from 'react-redux';
import {Provider as PaperProvider} from "react-native-paper";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from "react-native-vector-icons/Ionicons";
import LoginScreen from './src/authentification/LoginScreen';
import SignUpScreen from './src/authentification/SignUpScreen';
import "react-native-gesture-handler";
import { configureStore } from '@reduxjs/toolkit';

//REDUX

// const initialState = {LogIn: {username:null, password:null }}

// const store = 

//STACK Navigator
const AuthStack = createNativeStackNavigator();


function AuthStackScreen(){
  return(
    
       <PaperProvider>
          <AuthStack.Navigator>

              <AuthStack.Screen 
              name="Login" 
              component={LoginScreen}
              options={{headerShown:true}}
              />
              <AuthStack.Screen 
              name="SignUp" 
              component={SignUpScreen}/>

          </AuthStack.Navigator>
      </PaperProvider>
 
  )
};

//////////TAB Navigator
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
          else if (route.name === "Auth") {
            iconName = focused ? "checkbox" : "checkbox-outline";
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
      <Tab.Screen name="Auth" component={AuthStackScreen} />
      <Tab.Screen name="Events" component={EventsView} />
      <Tab.Screen name="EventCard" component={EventCardView} />
      <Tab.Screen name="Profile" component={ProfileView} />
   
      </Tab.Navigator>
    </NavigationContainer>
  );
};



///////////////////////////////

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
