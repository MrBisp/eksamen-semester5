import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


const ScreenOne = ({navigation}) => {
    return (
        <View>
            <Button title="Go back" onPress={() => navigation.goBack()}  />
            <Button title="Go To Screen Two" onPress={() => navigation.navigate('Screen 2')}  />
        </View>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default ScreenOne;