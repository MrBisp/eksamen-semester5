import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Recipe from "./Recipe";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./searchComponents/SearchScreen";

const StackNavigator = (props) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Søg'} options={{headerShown: false}} component={SearchScreen}/>
            <Stack.Screen name={'Opskrift'} options={{headerShown: false}} component={Recipe}/>
            <Stack.Screen name={'Andres profil'} options={{headerShown: false}} component={ProfileScreen}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;
