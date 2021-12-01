import React, { useEffect, useState } from "react";
import {SafeAreaView, ScrollView, View, Text, StyleSheet, ImageBackground, FlatList, Alert} from "react-native";
import SearchScreen from "./searchComponents/SearchField"
import ImageFrederik from "../assets/frederik.jpg"
import firebase from "firebase";
import ImageCard from "./ImageCard";
import {fillInformationIn} from "../helpers/recipes";
import {LinearGradient} from "expo-linear-gradient";
import FollowButton from "./followButton";
import RecipeSmall from "./RecipeSmall";
import ProfileSmall from "./ProfileSmall";

const ProfileScreen = (props) => {
    const [query, setQuery] = useState('');
    const [someKey, setSomeKey] = useState(1);
    let profile = {};
    let recipes = [];
    let recipesInitiated = false;

    React.useEffect(() => {
        //Call this code, whenever we navigate to this screen
        const unsubscribe = props.navigation.addListener('focus', () => {
            reloadData();
        });
        return unsubscribe;
    }, [props.navigation]);

    function reloadData(){
        loadData();
        //This is a bit of a hack. Whenever we have loaded new data, we will set the key to some new value, to force react to rerender the page
        setSomeKey(Math.random());
    }

    loadData();

    function loadData() {
        if(props.route.params != undefined){
            profile = props.route.params.profile;
            profile.initiated = true;
            console.log('Satte params profile til: ' + profile.name);
        }
        //If there is no profile as props, initiate profile 0
        if(!profile.hasOwnProperty('initiated')){
            //Find Profile
            let result = [];
            const fb = firebase.database().ref('Profiles');
            fb.on('value', snapshot => {
                let entries = Object.entries(snapshot.val());
                //console.log(entries); //For some reason, it only works when console logging entries... Reminds me of the dual slid experiment
                for(let i=0; i<entries.length; i++){
                    let result_obj = entries[i][1];
                    result_obj.id = entries[i][0];
                    result_obj.initiated = true;
                    result.push(result_obj);
                    break;
                }
            });
            profile = result[0];
            console.log('Satte firebase profile til: ' + profile.name);
        }

        //initiate recipes once
        if(!recipesInitiated) {
            //Find recipes made by author
            let result2 = [];
            const fb2 = firebase.database().ref('Recipes');
            fb2.on('value', snapshot => {
                let entries = Object.entries(snapshot.val());
                for(let i=0; i<entries.length; i++){
                    let result_obj = entries[i][1];
                    result_obj.id = entries[i][0];
                    if(result_obj.hasOwnProperty('authorID')){
                        //console.log('id: ' + result_obj.id +', authorID: ' + result_obj.authorID + ', frederik: ' + (result_obj.authorID == profile.id).toString())
                        if(result_obj.authorID == profile.id){
                            result2.push(result_obj);
                        }
                    }
                }
            });
            recipesInitiated = true;
            recipes = result2;
            recipes = fillInformationIn(recipes);
        }
    }


    //console.log(recipes);

    function updateFollow(newValue) {
        console.log('Updating ' + profile.name + ' follow to ' + newValue);
        let id = profile.id;
        let addFollowers;
        newValue ? addFollowers = 1 : addFollowers = -1;
        try {
            //Here we access the database and goes to "Recipes" and find the recipe with the id of the recipe and update the values to the values in the input fields.
            firebase.database()
                .ref('/Profiles/'+id)
                .update({'isFollowing': newValue, 'followers': profile.followers + addFollowers});

            if(newValue){
                Alert.alert('Super!', 'Du følger nu ' + profile.name);
            } else {
                Alert.alert('Super!', 'Du følger ikke længere ' + profile.name);
            }
            profile.followers = profile.followers + addFollowers;
            profile.isFollowing = newValue;
            loadData();
            setSomeKey(Math.random());
        } catch (error) {
            console.log('Error: ${error.message}');
        }
    }

    let followBtn = followBtnFunction();
    function followBtnFunction() {
        return <FollowButton onClickFunction={(v) => updateFollow(v)} isFollowing={profile.isFollowing}/>;
    }

    return(
        <SafeAreaView style={styles.container} key={profile.id}>
            <SearchScreen searchChanged={query => setQuery(query.toLowerCase())} />
            <ScrollView key={someKey} style={{marginBottom: 70}}>
                <ImageBackground source={{uri: profile.image}} style={styles.profilePicture} />
                <Text style={styles.h1}>{profile.name}</Text>

                <View style={styles.row}>
                    <View style={styles.infoContainer}>
                        <Text>{profile.followers}</Text>
                        <Text>følgere</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text>{recipes.length}</Text>
                        <Text>opskrifter</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        {followBtn}
                    </View>
                </View>

                {
                    //TO DO: Add a function that shows some message if there are zero results

                    //Search each recipe, and show them if they are within the search results
                    recipes.map(item => {
                        if(item.title.toLowerCase().includes(query)) {
                            return <ImageCard key={item.id} navigation={props.navigation} recipeObject={item} />
                        }
                    })
                }
            </ScrollView>
        </SafeAreaView>

    )
}


export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 40
    },
    profilePicture: {
        width:100,
        height:100,
        borderRadius: 500,
        overflow: 'hidden',
        display: 'flex',
        alignSelf: 'center',
        marginTop: 20
    },
    h1: {
        fontSize: 36,
        fontWeight: '700',
        display: 'flex',
        alignSelf: 'center',
    },
    infoContainer: {
        width: '33%',
        alignItems: 'center',
        height: 50
    },
    recipes: {
        paddingTop: 40
    },
    row: {
        flexDirection: 'row'
    },

});