import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Recipe from "./Recipe";
import HomeScreen from "./HomeScreen";
import UploadScreen from "./UploadScreen";

const StackNavigator = (props) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
            <Stack.Screen name={'Opskrift'} component={Recipe}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;