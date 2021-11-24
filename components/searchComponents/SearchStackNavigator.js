import React from 'react';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import SearchProfilesAndRecipies from "./SearchProfilesAndRecipies";
import SearchProfiles from "./SearchProfiles";
import SearchRecipes from "./SearchRecipes";
import FilterScreen from "./FilterScreen";


const SearchStackNavigator = (props) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={'SearchProfilesAndRecipies'} component={SearchProfilesAndRecipies}/>
            <Stack.Screen name={'SearchProfiles'} component={SearchProfiles}/>
            <Stack.Screen name={'SearchRecipes'} component={SearchRecipes}/>
            <Stack.Screen name={'FilterScreen'} component={FilterScreen}/>
        </Stack.Navigator>
    );
};

export default SearchStackNavigator;
