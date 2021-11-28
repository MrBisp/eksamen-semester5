import React, {useState} from 'react';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import SearchProfilesAndRecipies from "./SearchProfilesAndRecipies";
import SearchProfiles from "./SearchProfiles";
import SearchRecipes from "./SearchRecipes";
import firebase from "firebase";
import {fillInformationIn} from "../../helpers/recipes";


const SearchStackNavigator = ({navigation}) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={'SearchProfilesAndRecipies'} children={() => <SearchProfilesAndRecipies navigation={navigation} data={recipeProfiles}/>}/>
            <Stack.Screen name={'SearchProfiles'} children={() => <SearchProfiles navigation={navigation} data={profiles}/>}/>
            <Stack.Screen name={'SearchRecipes'} children={() => <SearchRecipes navigation={navigation} data={recipes}/>}/>
        </Stack.Navigator>
    );
};

export default SearchStackNavigator;
