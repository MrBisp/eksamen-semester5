import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, ScrollView, Pressable, Linking } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const Recipe = (props) => {
    let recipeObj = props.route.params.recipeObj;
    let url = 'https://www.bilkatogo.dk/kurv';
    console.log(recipeObj);

    return (
        <View>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>{recipeObj.title}</Text>
                <View style={styles.authorContainer}>
                    <ImageBackground style={styles.authorImage} source={{uri: recipeObj.author.image}} />
                    <View>
                        <Text style={styles.authorName}>{recipeObj.author.name}</Text>
                        <Text style={styles.authorTitle}>{recipeObj.author.subTitle}</Text>
                    </View>
                </View>
                <View style={{width: '100%'}}>
                    <Image source={{uri: recipeObj.image}} style={{width:'100%', height: 400, resizeMode: 'contain'}} />
                    <Text style={styles.likes}>{recipeObj.likesTotal} ({recipeObj.likesPercentage}%) ville lave denne igen</Text>
                    <Text style={styles.time}>Kan laves på under: {recipeObj.timeSpent} minutter</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ingredienser til 1 person</Text>
                    <Text>{recipeObj.ingredients}</Text>

                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 40}}>Fremgangsmåde</Text>
                    <Text>{recipeObj.recipe}</Text>
                    <Text style={styles.spacer}></Text>
                </View>
            </ScrollView>
            <View>
                <Pressable onPress={() => {Linking.openURL(url).catch((err) => console.error('An error occurred', err));}} style={styles.gradientButton}>
                    <LinearGradient colors={['#4EB66D', '#1F8E5F']} style={styles.gradient} start={{x: 1, y: 0}} end={{x: 0, y: 0}}>
                        <Text style={styles.followButton}>Tilføj til BilkaToGo Kurv</Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </View>

    );
}

export default Recipe;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingLeft: 8,
        paddingRight: 8,
        height: '85%'
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    authorContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
    },
    authorImage: {
        width:100,
        height:100,
        borderRadius: 200,
        overflow: 'hidden'
    },
    authorName: {
        fontSize: 24,
        paddingTop: 10,
        paddingLeft: 8
    },
    authorTitle: {
        fontSize: 18,
        color: 'darkgray',
        paddingLeft: 8
    },
    likes: {
        fontWeight: '400',
        fontSize: 18
    },
    time: {
        fontWeight: '400',
        fontSize: 18,
        marginBottom: 40
    },
    gradientButton: {
        height: 50,
        width: 'auto',
        borderRadius: 16,
        overflow: 'hidden',
        marginHorizontal: 12,
    },
    followButton: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    },
    spacer: {
        marginBottom: 25
    }
});
