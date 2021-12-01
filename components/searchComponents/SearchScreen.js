//Created by Tobias Nielsen
import React, {useState} from 'react';
import SearchProfilesAndRecipies from "./SearchProfilesAndRecipies";
import SearchProfiles from "./SearchProfiles";
import SearchRecipes from "./SearchRecipes";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet} from "react-native";
import firebase from "firebase";
import ImageFrederik from "../../assets/frederik.jpg";
import ImageTobias from "../../assets/tobias.jpg";
import {fillInformationIn} from "../../helpers/recipes";

const Tab = createMaterialTopTabNavigator();

const SearchScreen = ({navigation}) => {

    const [someKey, setSomeKey] = useState(1);
    const [recipes, setRecipes] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [recipeProfiles, setRecipeProfiles] = useState([]);

    React.useEffect(() => {
        //Call this code, whenever we navigate to this screen
        const unsubscribe = navigation.addListener('focus', () => {
            loadData();
            //This is a bit of a hack. Whenever we have loaded new data, we will set the key to some new value, to force react to rerender the page
            setSomeKey(Math.random());
            //console.log('focus')
        });
        return unsubscribe;
    }, [navigation]);

    function loadData() {
        if(recipes.length === 0) {
            let recipes = [];
            let profilesArr = [];

            //console.log('firebase starting...');
            const fb = firebase.database().ref('Recipes');
            fb.on('value', snapshot => {
                let entries = Object.entries(snapshot.val());
                for (let i = 0; i < entries.length; i++) {
                    let result_obj = entries[i][1];
                    result_obj.id = entries[i][0];
                    result_obj.type = "recipe";
                    recipes.push(result_obj);
                }
            });

            const fb2 = firebase.database().ref('Profiles');
            fb2.on('value', snapshot => {
                let entries = Object.entries(snapshot.val());
                for (let i = 0; i < entries.length; i++) {
                    let result_obj = entries[i][1];
                    result_obj.id = entries[i][0];
                    result_obj.type = "profile";
                    /*if(i%2 === 0) {
                        result_obj.image = ImageFrederik;
                    } else {
                        result_obj.image = ImageTobias;
                    }*/
                    profilesArr.push(result_obj);

                }
            });
            //console.log(profilesArr);
            var profilesFilled = fillInformationIn(profilesArr);
            //TODO: Tobias, lige nu fylder vi infomationer ind i profilesene i fillInfomrationIn. Man bør nok gemme dem i to forskellige arrays i stedet
            setProfiles(profilesFilled);
            setRecipes(fillInformationIn(recipes));

            let both = recipes.concat(profilesArr);

            //console.log(both);
            setRecipeProfiles(fillInformationIn(both));

            /*console.log(profiles);
            console.log(recipes);
            console.log(recipeProfiles);*/
            //console.log('Firebase done');
        }
    }

    return(
        <Tab.Navigator style={styles.safe} key={someKey}>
            <Tab.Screen name="Relevant" children={() => <SearchProfilesAndRecipies navigation={navigation} data={recipeProfiles}/>}/>
            <Tab.Screen name="Profiler" children={() => <SearchProfiles navigation={navigation} data={profiles}/>}/>
            <Tab.Screen name="Opskrifter" children={() => <SearchRecipes navigation={navigation} data={recipes}/>}/>
        </Tab.Navigator>
    );

};


const styles = StyleSheet.create({
    safe: {
        paddingTop: 40
    }
});

export default SearchScreen;
