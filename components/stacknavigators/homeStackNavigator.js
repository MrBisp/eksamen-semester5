import React from 'react';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Recipe from "../Recipe";
import HomeScreen from "../HomeScreen";

const StackNavigator = (props) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home feed'} options={{headerShown: false}} component={HomeScreen}/>
            <Stack.Screen name={'Opskrift'} options={{headerShown: false}} component={Recipe}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;
