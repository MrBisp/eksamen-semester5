//Created by Tobias Nielsen
import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList, ScrollView} from 'react-native';
import SearchField from "./SearchField";
import FilterElement from "./FilterElement";
//Image1 & ImageFrederik are imported pictures, used across the project
import Image1 from "../../assets/champignon.jpg";
import ImageFrederik from "../../assets/frederik.jpg";
//ImageCard Component created by Frederik Bisp - imported to the view for visualize the usage of this Search View
import ImageCard from "../ImageCard";

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

    return (
        <SafeAreaView>
            <SearchField searchChanged={query => setQuery(query.toLowerCase())}/>
            <FilterElement/>
            <Text>Dette er både profiler og opskrifter der kan søges imellem</Text>
            <ScrollView>
                {
                    DATA.map(item => {
                        //Search by title and author name
                        if(item.title.toLowerCase().includes(query) || item.author.name.toLowerCase().includes(query)) {
                            return <ImageCard key={item.id} recipeObject={item} navigation={navigation}/>
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
        paddingTop: 60
    }
});