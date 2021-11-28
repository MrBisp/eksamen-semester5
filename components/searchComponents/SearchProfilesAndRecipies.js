//Created by Tobias Nielsen
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList, ScrollView} from 'react-native';
import {fillInformationIn} from "../../helpers/recipes";
import firebase from 'firebase/app'
require('firebase/auth');
require('firebase/database');

import SearchField from "./SearchField";
import FilterElement from "./FilterElement";
import NewFilterScreen from "./NewFilterScreen";
import ProfileSmall from "../ProfileSmall";
import RecipeSmall from "../RecipeSmall";
//Image1 & ImageFrederik are imported pictures, used across the project
import Image1 from "../../assets/champignon.jpg";
import ImageFrederik from "../../assets/frederik.jpg";
import ImageTobias from "../../assets/tobias.jpg";
//ImageCard Component created by Frederik Bisp - imported to the view for visualize the usage of this Search View

//TODO: Af en eller anden grund viser den sommetider ingen resultater, selvom det tydeligt logges i consolen at dataen er hentet ned?

//Created by Tobias Nielsen
const SearchProfilesAndRecipies = (props) => {
    const [query, setQuery] = useState('');
    //console.log(props.data);
    //console.log(props.data);
    const data = props.data;

    return (
        <SafeAreaView style={styles.safe}>
            <SearchField searchChanged={query => setQuery(query.toLowerCase())}/>
            <NewFilterScreen/>
            <ScrollView style={styles.scroll}>
                {
                    //TO DO: Add a function that shows some message if there are zero results

                    //Search each recipe, and show them if they are within the search results
                    data.map(item => {
                        console.log('Mappede over en item');
                        if(item.type === "recipe") {
                            //Search by title and author name
                            if(item.title.toLowerCase().includes(query) || item.author.name.toLowerCase().includes(query)) {
                                return <RecipeSmall key={item.id} obj={item} navigation={props.navigation}/>
                            }
                        } else {
                            if(item.name.toLowerCase().includes(query)) {
                                return <ProfileSmall key={item.id} obj={item} navigation={props.navigation}/>
                            }
                        }
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchProfilesAndRecipies;

const styles = StyleSheet.create({
    safe: {

    },
    scroll:{
        marginBottom : 120,
    }
});
