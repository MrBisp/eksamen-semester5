import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, Button, StyleSheet, Alert} from "react-native";
import firebase from "firebase/compat";

const ProfileScreen = (navigation) => {

    const [recipes, setRecipes] = useState();

    useEffect(() => {
        if(!recipes)
        {
            firebase.database().ref()
        }
    });
    return(
        <TextInput>Min Profil</TextInput>
    )
};


export default ProfileScreen
