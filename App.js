import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from './components/SettingsScreen';
import UploadScreen from "./components/UploadScreen";
import ProfileScreen from "./components/ProfileScreen";

import { Ionicons } from '@expo/vector-icons';
import firebase from "firebase/app";
import HomeScreen from "./components/HomeScreen";
import searchScreen from "./components/searchComponents/SearchScreen";
import searchStackNavigator from "./components/searchStackNavigator";

// Recipeat's web app Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnlHyzX_PSRPieZ2lHt7CujhxUv4mN0lE",
    authDomain: "recipeat-46ec2.firebaseapp.com",
    databaseURL: "https://recipeat-46ec2-default-rtdb.firebaseio.com",
    projectId: "recipeat-46ec2",
    storageBucket: "recipeat-46ec2.appspot.com",
    messagingSenderId: "747965262741",
    appId: "1:747965262741:web:abab1077bbb6e8001e249c"
};

//This ensures, that a firebase app initializes, if it is not already running

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export default function App() {
  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list' : 'ios-list';
                    } else if (route.name === 'Upload opskrift') {
                        iconName = focused ? 'ios-add' : 'ios-add-outline';
                    } else if (route.name === 'Søg') {
                        iconName = focused ? 'ios-search' : 'ios-search';
                    } else if(route.name === 'Min Profil') {
                        iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name={'Home'} component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name={'Søg'} component={searchStackNavigator} options={{headerShown: false}}/>
            <Tab.Screen name={'Upload opskrift'} component={UploadScreen} options={{headerShown: false}}/>
            <Tab.Screen name={'Min Profil'} component={ProfileScreen} options={{headerShown: false}}/>
            <Tab.Screen name={'Settings'} component={SettingsScreen} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
});
