//Created by Tobias Nielsen
import React from 'react';
import SearchProfilesAndRecipies from "./SearchProfilesAndRecipies";
import SearchProfiles from "./SearchProfiles";
import SearchRecipes from "./SearchRecipes";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet} from "react-native";

const Tab = createMaterialTopTabNavigator();

const SearchScreen = () => {

    return(
        <Tab.Navigator style={styles.safe}>
            <Tab.Screen name="Relevant" component={SearchProfilesAndRecipies}/>
            <Tab.Screen name="Profiler" component={SearchProfiles}/>
            <Tab.Screen name="Opskrifter" component={SearchRecipes}/>
        </Tab.Navigator>
    );

};


const styles = StyleSheet.create({
    safe: {
        paddingTop: 40
    }
});

export default SearchScreen;
