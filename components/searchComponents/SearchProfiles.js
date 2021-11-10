//Created by Tobias Nielsen
import React, {useState} from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import SearchField from "./SearchField";
import FilterElement from "./FilterElement";

const SearchProfiles = () => {

    return (
        <SafeAreaView>
            <SearchField/>
            <FilterElement/>
            <Text>Dette er udelukkende profiler der kan søges imellem</Text>
        </SafeAreaView>
    );
};

export default SearchProfiles;
