import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import DetailsScreen from './components/DetailsScreen';
import StackNavigator from "./components/StackNavigator";
import { Ionicons } from '@expo/vector-icons';
import Recipe from "./components/Recipe";
import UploadScreen from "./components/UploadScreen";
import SearchScreen from "./components/UploadScreen";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Dit feed') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list' : 'ios-list';
                    } else if (route.name === 'Upload opskrift') {
                        iconName = focused ? 'ios-add' : 'ios-add-outline';
                    } else if (route.name === 'Søg') {
                        iconName = focused ? 'ios-search' : 'ios-search';
                    }


                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name={'Dit feed'} component={StackNavigator} options={{headerShown: false}}/>
            <Tab.Screen name={'Søg'} component={UploadScreen} options={{headerShown: false}}/>
            <Tab.Screen name={'Upload opskrift'} component={SearchScreen} options={{headerShown: false}}/>
            <Tab.Screen name={'Settings'} component={SettingsScreen} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
});
