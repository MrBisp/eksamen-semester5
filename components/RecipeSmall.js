import React from 'react';
import {Pressable, StyleSheet, View, Text, ImageBackground} from 'react-native';

const RecipeSmall = (props) => {
    let recipeObj = props.obj;

    return (
        <View style={styles.item}>
            <Pressable
                onPress={()=> {
                    //Routen skal laves - Formentlig skal der tilføjes et element til StackNavigator.js der henviser til Profil siden, som Frederik Laver
                    props.navigation.navigate('Opskrift', {recipeObj});
                }}
                style={styles.container}
            >
                <ImageBackground source={{uri: recipeObj.image}} style={styles.image}/>
                <View>
                    <Text style={styles.name}>{recipeObj.title}</Text>
                    <Text style={styles.title}>{recipeObj.author.name}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default RecipeSmall;

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'rgb(255, 255, 255)',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 16,
        overflow: 'hidden'
    },
    container: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
    },
    image: {
        width:100,
        height:100,
        borderRadius: 150,
        overflow: 'hidden'
    },
    name: {
        fontSize: 24,
        paddingTop: 10,
        paddingLeft: 8
    },
    title: {
        fontSize: 18,
        color: 'darkgray',
        paddingLeft: 8
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 10
    }
});
