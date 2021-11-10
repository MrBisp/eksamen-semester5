//Created by Tobias Nielsen
import React, {useState} from 'react';
import { StyleSheet, View,Text} from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchScreen = () => {

    const [search, setSearch] = useState('');

    return (
        <SearchBar
            placeholder="Type Here..."
            onChangeText={(search) => setSearch(search)}
            value={search}
            lightTheme={true}
            placeholderTextColor={'#666666'}
            inputStyle={{backgroundColor: 'white'}}
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, padding: 50}}
        />
    );
};

{/*HUSK AT SKIFTE NAVN*/}
export default SearchScreen;

