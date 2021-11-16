//Created by Tobias Nielsen
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList, ScrollView} from 'react-native';
import {fillInformationIn} from "../../helpers/recipes";
import firebase from 'firebase/app'
require('firebase/auth');
require('firebase/database');

import SearchField from "./SearchField";
import FilterElement from "./FilterElement";
import ProfileSmall from "../ProfileSmall";
import RecipeSmall from "../RecipeSmall";
//Image1 & ImageFrederik are imported pictures, used across the project
import Image1 from "../../assets/champignon.jpg";
import ImageFrederik from "../../assets/frederik.jpg";
import ImageTobias from "../../assets/tobias.jpg";
//ImageCard Component created by Frederik Bisp - imported to the view for visualize the usage of this Search View

//Data constant copied from HomeScreen.js (Author: Frederik Bisp)
const DATA = [
    {
        id: '1',
        title: 'Fyldte champignon',
        image: Image1,
        likesTotal: 18578,
        likesPercentage: 92,
        time: 15,
        ingredients: [
            {
                name: 'champignon',
                amount: 10,
                unit: 'stk',
                id: 'ingredient0'
            },
            {
                name: 'fetaost',
                amount: 300,
                unit: 'g',
                id: 'ingredient1'
            },
            {
                name: 'Økologisk pesto',
                amount: 1,
                unit: 'glas',
                id: 'ingredient2'
            },
        ],
        recipe: [
            {
                description: 'Fjern toppen fra champignonen',
                id: 'step0'
            },
            {
                description: 'Skær osten ud',
                id: 'step2'
            },
            {
                description: 'Fordel pesto og ost i champignonen',
                id: 'step3'
            },
            {
                description: 'Varm i ovn i 8 minutter ved 200 grader varmluft.',
                id: 'step4'
            }
        ],
        author: {
            name: 'Frederik Bisp',
            subTitle: 'Son of a butcher',
            image: ImageFrederik
        }
    }
];



//Created by Tobias Nielsen
const SearchProfilesAndRecipies = ({navigation}) => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if(recipes.length == 0) {
            let result = [];
            console.log('firebase starting...');
            const fb = firebase.database().ref('Recipes');
            fb.on('value', snapshot => {
                let entries = Object.entries(snapshot.val());
                for(let i=0; i<entries.length; i++){
                    let result_obj = entries[i][1];
                    result_obj.id = entries[i][0];
                    result_obj.type = "recipe";
                    result.push(result_obj);
                }
            });

            const fb2 = firebase.database().ref('Profiles');
            fb2.on('value', snapshot => {
                let entries = Object.entries(snapshot.val());
                for(let i=0; i<entries.length; i++){
                    let result_obj = entries[i][1];
                    result_obj.id = entries[i][0];
                    result_obj.type = "profile";
                    if(i%2 === 0) {
                        result_obj.image = ImageFrederik;
                    } else {
                        result_obj.image = ImageTobias;
                    }
                    result.push(result_obj);
                }
            });
            setRecipes(fillInformationIn(result));
            console.log('Firebase done');
        }
    }, []);

    return (
        <SafeAreaView style={styles.safe}>
            <SearchField searchChanged={query => setQuery(query.toLowerCase())}/>
            <FilterElement/>
            <ScrollView style={styles.scroll}>
                {
                    //TO DO: Add a function that shows some message if there are zero results

                    //Search each recipe, and show them if they are within the search results
                    recipes.map(item => {

                        if(item.type === "recipe") {
                            //Search by title and author name
                            if(item.title.toLowerCase().includes(query) || item.author.name.toLowerCase().includes(query)) {
                                return <RecipeSmall key={item.id} obj={item} navigation={navigation}/>
                            }
                        } else {
                            if(item.name.toLowerCase().includes(query)) {
                                return <ProfileSmall key={item.id} obj={item} navigation={navigation}/>
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
