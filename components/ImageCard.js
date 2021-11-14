import React from 'react';
import {Pressable, StyleSheet, View, Text, ImageBackground} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import Recipe from "./Recipe";

const ImageCard = (props) => {
    let recipeObj = props.recipeObject;

    return (
        <View style={styles.item}>
            <Pressable onPress={()=> {
                props.navigation.navigate('Opskrift', {recipeObj});
            }}>
                <ImageBackground source={recipeObj.image} style={{width:'100%', height:200}}>
                    <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{recipeObj.title}</Text>
                            <Text style={styles.likes}>{recipeObj.likesPercentage}% ville lave igen</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </Pressable>
        </View>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default ImageCard;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 16,
        overflow: 'hidden'
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 10
    },
    title: {
        fontSize: 32,
        color: 'rgb(255, 255, 255)',
        fontWeight: '600'
    },
    likes: {
        color: 'rgb(255,255,255)'
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 150
    }
});