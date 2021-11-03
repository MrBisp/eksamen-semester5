import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import SearchElement from "./SearchElement";
import FilterElement from "./FilterElement";

const SearchScreen = () => {
    return (
        <SafeAreaView>
            <Text>Search Screen</Text>
            <SearchElement/>
            <FilterElement/>
        </SafeAreaView>
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
