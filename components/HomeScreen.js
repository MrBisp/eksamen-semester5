import React from 'react';
import {StyleSheet, View, Text, FlatList, Image, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ImageCard from "./ImageCard";
import Image1 from "../assets/champignon.jpg"
import Image2 from "../assets/bacon.jpg"
import ImageFrederik from "../assets/frederik.jpg"


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
    }/*,
    {
        id: '2',
        title: 'Baconsvøbte bønner i ovn',
        image: Image2
    },
    {
        id: '4',
        title: 'Third Item',
        image: Image1
    },
    {
        id: '5',
        title: 'Third Item',
        image: Image1
    },
    {
        id: '6',
        title: 'Third Item',
        image: Image1
    },
    {
        id: '7',
        title: 'Third Item',
        image: Image1
    },
    {
        id: '8',
        title: 'Third Item',
        image: Image1
    },*/
];

const HomeScreen = ({navigation}) => {
    const renderItem = ({ item }) => (
        <ImageCard navigation={navigation} recipeObject={item} />
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.h1}>Sulten igen, Frederik?</Text>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </ScrollView>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        paddingTop:40
    },
    h1: {
        fontSize: 42,
        fontWeight: '700',
        paddingLeft: 20
    }
});
