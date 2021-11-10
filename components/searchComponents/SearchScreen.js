//Created by Tobias Nielsen
import React from 'react';
import SearchProfilesAndRecipies from "./SearchProfilesAndRecipies";
import SearchProfiles from "./SearchProfiles";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const SearchScreen = () => {

    return(
        <Tab.Navigator
        >
            <Tab.Screen name="Relevant" component={SearchProfilesAndRecipies}/>
            <Tab.Screen name="Profiler" component={SearchProfiles}/>
        </Tab.Navigator>
    );

};

/*
const styles = {
    searchElement: {
        width: 239,
        height: 55,
        backgroundColor: '#ebebeb',
        overflow: visible,
        borderRadius: 16,
        padding: 20
    }
};*/

export default SearchScreen;
