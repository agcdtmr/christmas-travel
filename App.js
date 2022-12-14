import { EventsView } from './src/screens/EventsView'
import { HomeView } from './src/screens/HomeView'
import CountDownView from './src/screens/ProfileView'
import EventCardView from './src/screens/EventCardView'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionic from 'react-native-vector-icons/Ionicons'
import LoginScreen from './src/authentification/LoginScreen'
import SignUpScreen from './src/authentification/SignUpScreen'
import 'react-native-gesture-handler'
import { configureStore } from '@reduxjs/toolkit'
import logInReducer from './src/reducer/LogInSlice'
//REDUX

export const store = configureStore({
  reducer: {
    login: logInReducer,
  },
})

// const initialState = {LogIn: {username:null, password:null }}

// const store =

//STACK Navigator
const AuthStack = createNativeStackNavigator()

function AuthStackScreen() {
  return (
    <PaperProvider>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      </AuthStack.Navigator>
    </PaperProvider>
  )
}

//////////TAB Navigator
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline'
              } else if (route.name === 'Auth') {
                iconName = focused ? 'checkbox' : 'checkbox-outline'
              } else if (route.name === 'Events') {
                iconName = focused ? 'earth' : 'earth-outline'
              } else if (route.name === 'EventCard') {
                iconName = focused ? 'trail-sign' : 'trail-sign-outline'
              } else if (route.name === 'CountDown') {
                iconName = focused ? 'happy' : 'happy-outline'
              }

              return <Ionic name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#f5d68f',
            tabBarStyle: {
              backgroundColor: '#287d4d',
              height: 60,
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen name="Auth" component={AuthStackScreen} />
          <Tab.Screen name="Events" component={EventsView} />
          <Tab.Screen name="EventCard" component={EventCardView} />
          <Tab.Screen name="CountDown" component={CountDownView} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
