//Created by Tobias Nielsen
import React, {useState, useEffect} from 'react';
import { StyleSheet, View,Text} from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchScreen = ({searchChanged}) => {

    const [search, setSearch] = useState('');

    //When search is changed, call a function that is passed from the parent
    useEffect(() => {
        //For some reason, every other frame, the function does not exists... By putting it in a if statement to check if the function exists, we get expected behaviour
        if(typeof searchChanged == "function"){
            searchChanged(search);
        }
    }, [search]);

    return (
        <SearchBar
            placeholder="Type Here..."
            onChangeText={(search) => setSearch(search)}
            value={search}
            lightTheme={true}
            placeholderTextColor={'#666666'}
            inputStyle={{backgroundColor: 'white'}}
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, padding: 5}}
        />
    );
};

{/*HUSK AT SKIFTE NAVN*/}
export default SearchScreen;

const styles = StyleSheet.create({
    safe: {
        paddingTop: 60
    }
});

