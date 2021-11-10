//Created by Tobias Nielsen
import React, {useState} from 'react';
import { View, Text} from 'react-native';
import SearchField from "./SearchField";
import FilterElement from "./FilterElement";

const SearchProfiles = () => {

    return (
        <View>
            <SearchField/>
            <FilterElement/>
            <Text>Dette er udelukkende profiler der kan søges imellem</Text>
        </View>
    );
};

export default SearchProfiles;
