//Created by Tobias Nielsen
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SearchField from "./SearchField";
import FilterElement from "./FilterElement";
import firebase from "firebase";
import {fillInformationIn} from "../../helpers/recipes";
import RecipeSmall from "../RecipeSmall";


const SearchRecipes = ({navigation}) => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if(recipes.length === 0) {
            let result = [];
            console.log('firebase starting...');
            const fb = firebase.database().ref('Recipes');
            fb.on('value', snapshot => {
                let entries = Object.entries(snapshot.val());
                console.log(entries);
                for(let i=0; i<entries.length; i++){
                    let result_obj = entries[i][1];
                    result_obj.id = entries[i][0];
                    result.push(result_obj);
                }
            });
            setRecipes(fillInformationIn(result));
            console.log('Firebase done');
        }
    }, []);

    return (
        <SafeAreaView>
            <SearchField searchChanged={query => setQuery(query.toLowerCase())}/>
            <FilterElement/>
            <ScrollView style={styles.scroll}>
                {
                    //TO DO: Add a function that shows some message if there are zero results

                    //Search each recipe, and show them if they are within the search results
                    recipes.map(item => {
                        //Search by title and author name
                        if(item.title.toLowerCase().includes(query) || item.author.name.toLowerCase().includes(query)) {
                            return <RecipeSmall key={item.id} obj={item} navigation={navigation}/>
                        }
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchRecipes;

const styles = StyleSheet.create({
    safe: {

    },
    scroll:{
        marginBottom : 120,
    }
});
