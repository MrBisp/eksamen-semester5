//Created by Tobias Nielsen
import React from 'react';
import SearchProfilesAndRecipies from "./SearchProfilesAndRecipies";
import SearchProfiles from "./SearchProfiles";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet} from "react-native";

const Tab = createMaterialTopTabNavigator();

const SearchScreen = () => {

    return(
        <Tab.Navigator style={styles.safe}>
            <Tab.Screen name="Relevant" component={SearchProfilesAndRecipies}/>
            <Tab.Screen name="Profiler" component={SearchProfiles}/>
        </Tab.Navigator>
    );

};


const styles = StyleSheet.create({
    safe: {
        paddingTop: 40
    }
});

export default SearchScreen;
