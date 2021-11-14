import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    ImageBackground
} from "react-native";
import ImageFrederik from "../assets/frederik.jpg"
import firebase from "firebase/app";

const ProfileScreen = (navigation) => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.h1}>Min Profil</Text>
                <ImageBackground source={ImageFrederik} style={{width:150, height:150}} />
            </ScrollView>
        </SafeAreaView>
    )
}


export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        paddingTop:100
    },
    h1: {
        fontSize: 42,
        fontWeight: '600',
        paddingLeft: 20
    },
    recipes: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});