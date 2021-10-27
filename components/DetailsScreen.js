import React from 'react';
import { StyleSheet, View,Text, Button} from 'react-native';
import ScreenOne from "./stackComponents/ScreenOne";
import ScreenTwo from "./stackComponents/ScreenTwo";



const DetailsScreen = ({navigation}) => {
    const navController = (navigation, route) => {
        navigation.navigate(route);
    }

    return (
        <View>
            <Text>Details screen</Text>
            <Button title="Go To Screen One" onPress={() => navController(navigation, 'Screen 1')}  />
            <Button title="Go To Screen Two" onPress={() => navController(navigation, 'Screen 2')}  />
        </View>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default DetailsScreen;