import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Recipe from "./Recipe";
import HomeScreen from "./HomeScreen";
import UploadScreen from "./UploadScreen";
import ProfileScreen from "./ProfileScreen";

const StackNavigator = (props) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} options={{headerShown: false}} component={HomeScreen}/>
            <Stack.Screen name={'Opskrift'} options={{headerShown: false}} component={Recipe}/>
            <Stack.Screen name={'Andres profil'} options={{headerShown: false}} component={ProfileScreen}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;
