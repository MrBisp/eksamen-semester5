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

const SearchProfiles = ({navigation}) => {

    const [query, setQuery] = useState('');
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        if(profiles.length === 0) {
            let result = [];
            console.log('firebase starting...');
            const fb = firebase.database().ref('Profiles');
            fb.on('value', snapshot => {
                let entries = Object.entries(snapshot.val());
                console.log(entries);
                for(let i=0; i<entries.length; i++){
                    let result_obj = entries[i][1];
                    result_obj.id = entries[i][0];
                    result.push(result_obj);
                }
            });
            setProfiles(fillInformationIn(result));
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
                    profiles.map(item => {
                        if(item.name.toLowerCase().includes(query)) {
                            return <ProfileSmall key={item.id} obj={item} navigation={navigation}/>
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
