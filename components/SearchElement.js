import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchScreen = () => {

    const state = {
        search: ""
    };

    const updateSearch = ({search}) => {
        this.setState({search});
    };

    const {search} = state.search;

    return (
        <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
        />
    );
};

{/*HUSK AT SKIFTE NAVN*/}
export default SearchScreen;
