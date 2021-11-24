import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import ImageCard from "./ImageCard";
import firebase from "firebase";
import {fillInformationIn} from "../helpers/recipes";

const HomeScreen = ({navigation}) => {
    const [someKey, setSomeKey] = useState(1);
    let profiles = [];
    let recipes = [];
    let profileIDs = [];

    const renderItem = ({ item }) => (
        <ImageCard navigation={navigation} recipeObject={item} />
    );

    React.useEffect(() => {
        //Call this code, whenever we navigate to this screen
        const unsubscribe = navigation.addListener('focus', () => {
            loadData();
            //This is a bit of a hack. Whenever we have loaded new data, we will set the key to some new value, to force react to rerender the page
            setSomeKey(Math.random());
            console.log('focus')
        });
        return unsubscribe;
    }, [navigation]);



    loadData();
    function loadData(){
        profiles = [];
        recipes = [];
        profileIDs = [];
        //First, let's find all of the profiles that we currently follow
        const fb = firebase.database().ref('Profiles');
        fb.on('value', snapshot => {
            let entries = Object.entries(snapshot.val());
            //console.log(entries); //For some reason, it only works when console logging entries... Reminds me of the dual slid experiment
            for(let i=0; i<entries.length; i++){
                let result_obj = entries[i][1];
                result_obj.id = entries[i][0];
                if(result_obj.isFollowing === true){
                    profiles.push(result_obj);
                    profileIDs.push(result_obj.id)
                }
            }
            console.log('We are following these users: ');
            console.log(profileIDs);
        });

        //Then, let's get the recipes of these profiles
        const fb2 = firebase.database().ref('Recipes');
        fb2.on('value', snapshot => {
            let entries = Object.entries(snapshot.val());
            for(let i=0; i<entries.length; i++){
                let result_obj = entries[i][1];
                result_obj.id = entries[i][0];
                if(profileIDs.indexOf(result_obj.authorID) != -1){
                    recipes.push(result_obj);
                }
            }
        });
        recipes = fillInformationIn(recipes);
    }

    let returnItems = returnItemsFunction();
    function returnItemsFunction(){
        if(recipes.length > 0){
            return <FlatList
                data={recipes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />;
        } else {
            console.log('Følger ingen profiler');
            return <Text style={styles.followText}>Følg nogle profiler, så du kan se noget i dit feed!</Text>
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.h1}>Sulten igen, Frederik?</Text>
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/recipeat-46ec2.appspot.com/o/blomk%C3%A5l%20og%20schnitzel.jpg?alt=media&token=461c253a-45d7-4916-9882-913e3d9c1818'}} style={{width: 200, height: 200}} />
            <SafeAreaView key={someKey}>
                {returnItems}
            </SafeAreaView>
        </ScrollView>
    );
}


{/*HUSK AT SKIFTE NAVN*/}
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        paddingBottom: 40
    },
    h1: {
        fontSize: 42,
        fontWeight: '700',
        paddingLeft: 20
    },
    followText: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingTop: 140
    }
});
