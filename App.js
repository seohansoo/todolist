import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
// import CalendarScreen from "./screens/CalendarScreen";
import TabBarIcon from "./components/TabBarIcon"
import ListStackNavigation from "./navigations/ListStackNavigation"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName = "Home"
        screenOptions = {({route}) => ({
          tabBarLabel : ()=>{false},
          tabBarIcon : ({focused}) => (
            TabBarIcon(focused,route.name)
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="List" component={ListStackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}