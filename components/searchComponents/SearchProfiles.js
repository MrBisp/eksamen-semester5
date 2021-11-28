//Created by Tobias Nielsen
import React, {useEffect, useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SearchField from "./SearchField";
import FilterElement from "./FilterElement";
import firebase from "firebase";
import ImageTobias from "../../assets/tobias.jpg";
import ImageFrederik from "../../assets/frederik.jpg";
import {fillInformationIn} from "../../helpers/recipes";
import ProfileSmall from "../ProfileSmall";
import NewFilterScreen from "./NewFilterScreen";

const SearchProfiles = (props) => {

    const [query, setQuery] = useState('');
    const data = props.data;

    return (
        <SafeAreaView>
            <SearchField searchChanged={query => setQuery(query.toLowerCase())}/>
            <NewFilterScreen/>
            <ScrollView style={styles.scroll}>
                {
                    //TO DO: Add a function that shows some message if there are zero results

                    //Search each recipe, and show them if they are within the search results
                    data.map(item => {
                        if(item.name.toLowerCase().includes(query)) {
                            return <ProfileSmall key={item.id} obj={item} navigation={props.navigation}/>
                        }
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchProfiles;

const styles = StyleSheet.create({
    safe: {

    },
    scroll:{
        marginBottom : 120,
    }
});
