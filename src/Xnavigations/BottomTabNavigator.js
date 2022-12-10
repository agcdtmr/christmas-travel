// import React from 'react';
// import { HomeView } from '../screens/HomeView';
// import ProfileView from '../screens/ProfileView';
// import {EventsView} from '../screens/EventsView';
// import EventCardView from '../screens/EventCardView';

// import {NavigationContainer, TabActions} from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionic from "react-native-vector-icons/Ionicons";

// const Tab = createBottomTabNavigator();

// export default function BottomTabNavigator() {
//   return (

//     <NavigationContainer>
//       <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarIcon:({focused, color, size}) => {
//           let iconName;
//           if (route.name ==="Home") {
//             iconName = focused? "home" : "home-outline";
//           }
//           else if (route.name === "Events") {
//             iconName = focused ? "earth" : "earth-outline";
//           }
//           else if (route.name === "EventCard") {
//             iconName = focused ? "trail-sign" : "trail-sign-outline";
//           }
//           else if (route.name === "Profile") {
//             iconName = focused ? "happy" : "happy-outline";
//           }

//           return <Ionic name ={iconName} size={size} color={color}/>
//                 },
//         tabBarActiveTintColor: "#8EC278",
//         tabBarInactiveTintColor: "#27ae61",
//         tabBarStyle:{
//           backgroundColor:"#287D4D",
//           height:60,
//         },
//       })
//     }
//       >

//       <Tab.Screen name="Home" component={HomeView} />
//       <Tab.Screen name="Events" component={EventsView} />
//       <Tab.Screen name="EventCard" component={EventCardView} />
//       <Tab.Screen name="Profile" component={ProfileView} />
//       </Tab.Navigator>

//       </NavigationContainer>
//   );
// };